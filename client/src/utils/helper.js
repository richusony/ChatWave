import axios from "axios";

export async function loginSignUp(email, fullname, profile_img) {
    console.log("reached",email, fullname, profile_img)
  const res = await axios.post("http://localhost:8080/api/auth/login-signup", {
    email,
    fullname,
    profile_img,
  });
  console.log("response from backend  ",res);

}
