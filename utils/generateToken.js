import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
let complete = false;

// const cookieContent = 'this is a cookie'

const cookieOptions = {
  httpOnly: true,    // safety, does not allow cookie to be read in the frontend javascript
  maxAge: 60 * 60 * 1000, // cookie age in seconds
  sameSite: 'Strict' // works for local development
}

if(process.env.NODE_ENV === 'production') {

  // these options work on a https server
  cookieOptions.secure = true 
  cookieOptions.sameSite= 'None'
}

  const token = jwt.sign({ userId }, process.env.JWT_SECRET,{expiresIn: '1h'});
    console.log("checking token",userId, " ::: ", token)
    res.cookie("jwt", token, cookieOptions);
  complete = true;
  console.log("compeleted : ",complete);
return complete;
};

export default generateTokenAndSetCookie;
