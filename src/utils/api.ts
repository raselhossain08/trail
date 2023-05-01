import axios from "axios";
import state from "./state";

const url = "https://ads-project-backend.vercel.app";
// const url = "http://localhost:5000";

export const userInfos = async () => {
  return await axios({
    method: "GET",
    url: url + "/account/info",
    headers: { token: localStorage.getItem("token") },
  })
    .then(({ data: { msg } }) => {
      if (!msg) return;
      if (!msg.history) msg.history = null;
      const current = { infos: msg };
      return current;
    })
    .catch((err) => {
      console.log(err);
      return;
    });
};

export const useWallet = async (_id: string) =>
  await axios({
    method: "POST",
    url: url + "/account/buy",
    headers: { token: localStorage.getItem("token") },
    data: { _id: "6395121c543676ed459f20db" },
  })
    .then((res) => {
      if (res.data.msg.data) return res.data.msg.data;
      return;
    })
    .catch((err) => (console.log(err), undefined));

export const getCategory = async () =>
  await axios({
    method: "get",
    url: url + "/account/category",
    headers: { token: localStorage.getItem("token") },
  })
    .then((res) => {
      if (!res.data.msg) return;
      return { type: res.data.msg };
    })
    .catch((err) => (console.log(err), undefined));


export const modifyAccount = async (data: any) =>
  await axios({
    method: "POST",
    url: url + "/account/modify",
    headers: { token: localStorage.getItem("token") },
    data,
  })
    .then((res) => {
      console.log(res.data);

      if (!res.data.msg) return;
      return { type: res.data.msg };
    })
    .catch((err) => (console.log(err), undefined));
