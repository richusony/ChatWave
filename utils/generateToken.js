import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
let complete = false;
  const token = jwt.sign({ userId }, process.env.JWT_SECRET,{expiresIn: '1h'});
    console.log("checking token",userId, " ::: ", token)
    res.cookie("jwt", token, {
    maxAge:60 * 60 * 1000,
    httpOnly: true,
    sameSite: "none",
    secure: false,
  });
  complete = true;
  console.log("compeleted : ",complete);
return complete;
};

export default generateTokenAndSetCookie;
