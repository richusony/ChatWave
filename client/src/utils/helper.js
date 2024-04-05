import axios from "axios";

export async function loginSignUp(email, fullname, profile_img, setUser) {
  console.log("reached", email, fullname, profile_img);
  const reqData = {
    email,
    fullname,
    profile_img,
  };
  // await axios.post("/api/auth/login-signup", {});
  const res = await fetch("/api/auth/login-signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: await JSON.stringify(reqData),
  });
  const resData = await res.json();
  localStorage.setItem("login-user", JSON.stringify(resData));
  setUser(resData);
  // console.log("response from backend  ", resData);
}

export async function getUsers() {
  // console.log("reached");
  const res = await axios.get("/api/users/");
  return res.data;
  // console.log("all users from backend  ", res);
}

export function extractTime(dateString) {
  const date = new Date(dateString);
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  if (hours < 12) return `${hours}:${minutes} am`;
  return `${hours}:${minutes} pm`;
}

function padZero(number) {
  return number.toString().padStart(2, "0");
}
