import axios from "axios";
import state from "./state";

const url = "https://ads-project-backend.vercel.app";
// const url = "http://localhost:5000";

export const userInfos = async (current: any) => {
  const signal = new AbortController();
  const { name, email } = state.state.infos;
  if (name == email && name.length < 2 && localStorage.getItem("token")) {
    console.log("herz");
    const res = await axios({
      method: "GET",
      url: url + "/account/info",
      headers: { token: localStorage.getItem("token") },
      signal: signal.signal,
    })
      .then(({ data: { msg } }) => {
        if (!msg.history) msg.history = null;
        const infos = msg;
        current.infos = infos;
        console.log("infos");
        console.log(infos);

        return current;
      })
      .catch((err) => {
        console.log(err);
        return {};
      })
      .then((r) => (signal.abort(), r));
    return res;
  } else return {};
};

export const useWallet = async (_id: string) =>
  await axios({
    method: "POST",
    url: url + "/account/buy",
    headers: { token: localStorage.getItem("token") },
    data: { _id },
  })
    .then((res) => {
      if (res.data.msg) return res.data.msg;
      else return;
    })
    .catch((err) => (console.log(err), { err: "you can't buy this item" }));

export const useGiftCode = async (code: string) =>
  await axios({
    method: "POST",
    url: url + "/gift/use",
    headers: { token: localStorage.getItem("token") },
    data: { code },
  })
    .then((res) => {
      console.log(res);

      if (res.data.msg) return { msg: res.data.msg };
      else return res.data.err;
    })
    .catch((err) => (console.log(err), err.response.data || "error"));

export const warranty = async () =>
  await axios({
    method: "GET",
    url: url + "/account/warranty",
    headers: { token: localStorage.getItem("token") },
  })
    .then((res) => {
      if (res.data.msg) return { msg: res.data.msg };
      else return;
    })
    .catch((err) => (console.log(err), undefined));

export const getCategory =async () =>
  await axios({
    method: "get",
    url: url + "/account/category",
    headers: { token: localStorage.getItem("token") },
  })
    .then((res) => {
      if (!res.data.msg) return {};
      // (get as any).type = res.data.msg;
      // return get;
      return { type: res.data.msg };
    })
    .catch((err) => (console.log(err), {}));

export const getAccounts = async (data: any) =>
  await axios({
    method: "POST",
    url: url + "/account/accounts",
    headers: { token: localStorage.getItem("token") },
    data,
  })
    .then((res) => {
      if (!res.data.msg) return;
      return res.data.msg;
    })
    .catch((err) => (console.log(err), undefined));

export const getNotification = async () =>
  await axios({
    method: "get",
    url: url + "/account/notification",
    headers: { token: localStorage.getItem("token") },
  })
    .then((res) => {
      if (!res.data.msg) return;
      return res.data.msg;
    })
    .catch((err) => (console.log(err), undefined));

export const link = url;
