import axios from "axios";

const url = "https://ads-project-backend.vercel.app";
// const url = "http://localhost:5000";

export type SignupInputsType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
};

export const signupFunction = async (data: SignupInputsType, reRef: any) => {
  //validate incoming data
  if (!validateEmail(data.email))
    return { err: "invalid email", place: "email" };

  const token = await reRef.current.executeAsync();

  reRef.current.reset();

  return await axios({
    method: "POST",
    url: "https://ads-project-backend.vercel.app/auth/signup",
    data: { ...data, token },
  })
    .then(({ data }) =>
      data.token
        ? localStorage.setItem("token", data.token)
        : {
            err: data.err.split(".")[1],
            place: data.err.split(".")[0],
          }
    )
    .catch(
      ({
        response: {
          data: { err },
        },
      }) => (
        console.log(err),
        {
          err: err.split(".")[1],
          place: err.split(".")[0],
        }
      )
    );
};

export type LoginInputsTypes = {
  email: string;
  password: string;
};

export const validateEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const loginFunction = async (data: LoginInputsTypes, reRef: any) => {
  if (!validateEmail(data.email))
    return { err: "Invalid email", place: "email" };

  const token = await reRef.current.executeAsync();

  reRef.current.reset();

  return await axios({
    method: "POST",
    url: url + "/auth/login",
    data: { ...data, token },
  })
    .then(
      ({ data }) => (
        console.log(data), localStorage.setItem("token", data.token)
      )
    )
    .catch(
      ({
        response: {
          data: { err },
        },
      }) => ({
        err: err.split(".")[1],
        place: err.split(".")[0],
      })
    );
};

export const isActive = async () => {
  const token =localStorage.getItem("token")
  if (token)
    await axios({
      method: "GET",
      url: url + "/account/activeUsers",
      headers: { token: token },
    }).then((res) => {
      console.log("isActive",res);
    });
};
