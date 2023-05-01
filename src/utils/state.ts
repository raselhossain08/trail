import { useSyncExternalStore } from "use-sync-external-store/shim";
//import { deepmerge } from "deepmerge-ts";
import { getCategory, userInfos } from "./dasboard.action";
import axios from "axios";

function createState<T, R>(
  state: T,
  methods: (currentState: T) => {
    [key in keyof R]: (...args: any) => Partial<T> | Promise<Partial<T>>;
  }
) {
  const listeners = new Set<() => void>();

  const subscribe = (clbk: () => void) => {
    listeners.add(clbk);
    return () => listeners.delete(clbk);
  };

  let newState = state;

  let newMethods = methods(newState);

  Object.keys(methods(newState)).forEach((e) => {
    const fun = methods(newState)[e as keyof R];

    newMethods[e as keyof R] = (p: Parameters<typeof fun>) => {
      if (
        typeof fun(p) === "object" &&
        typeof (fun(p) as any).then === "function"
      )
        return (fun(p) as Promise<T>).then((s: T) => {
          newState = { ...newState, ...s };
          listeners.forEach((l) => l());

          return newState;
        });
      else
        return (
          // (newState = deepmerge(newState, fun(p)) as any as T),
          (newState = { ...newState, ...fun(p) }),
          listeners.forEach((l) => l()),
          newState
        );
    };
  });

  const sUpdate = (e: T) => {
    //newState = deepmerge(newState, e) as any as T;
    // newState = deepmerge(newState, e) as any as T;
    newState = { ...newState, ...e };

    listeners.forEach((l) => l());
  };

  return {
    useStore: (field: (s: typeof state) => any) =>
      useSyncExternalStore(subscribe, () => field(newState)),
    sUpdate,
    state: newState,
    ...newMethods,
  };
}

enum places {
  dashboard,
  profile,
  history,
  wallet,
  card,
  warranty,
  categories,
  crypto,
}

export const state = {
  notification: false,
  place: places,
  type: [],
  infos:
    {
      name: "",
      wallet: 0,
      usageWallet: 0,
      email: "",
      phone: "",
      history: undefined,
    } || undefined,
};

export type StateType = {
  place: typeof places;
  infos?: any;
};

export default createState(state, (currentState) => ({
  // changeView1: (place: typeof places) => ({ ...currentState, place }),
  // console.log(currentState),
  // //(currentState.place = place),
  // currentState
  changeView: (place: typeof places) => ({ place }),

  // toggelNotification: () => ({
  //   ...currentState,
  //   notification: currentState.notification!,
  // }),
  // updateState: async () => ({
  //   ...currentState,
  //   ...(await userInfos(currentState)),
  // }),
  updateState: async (info: any) => ({
    // ...currentState,
    ...info,
  }),

  getAcciuntsType: async () => await getCategory(),
  //userInfos: async () => await userInfos(currentState),
}));
