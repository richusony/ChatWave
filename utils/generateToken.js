import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
let complete = false;
  const token = jwt.sign({ userId }, process.env.JWT_SECRET);
    console.log("checking token",userId, " ::: ", token)
    res.cookie("jwt", token, {
    httpOnly: true,
    sameSite: "none",
    secure: process.env.NODE_ENV !== "development",
  });
  complete = true;
return complete;
};

export default generateTokenAndSetCookie;
