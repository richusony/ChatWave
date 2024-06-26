import {io} from "../../socket/socket.js"
import userModel from "../../models/user.model.js";
import generateTokenAndSetCookie from "../../utils/generateToken.js";

export const loginSignUp = async (req, res) => {
  try {
    const { email, fullname, profile_img } = req.body;

    const userDetails = await userModel.findOne({ email });
    if (!userDetails) {
      const firstName = fullname.split(" ");
      const userName =
        firstName[0].toLocaleLowerCase() + Math.floor(Math.random() * 1000);

      const addUser = await userModel.create({
        email: email,
        fullname: fullname,
        username: userName,
        profileImage: profile_img,
        blocked: false,
      });
      if (addUser) {
        const complete = generateTokenAndSetCookie(addUser._id, res);
        if (complete) {
          res.status(201).json({
            _id: addUser._id,
            fullname: addUser.fullname,
            username: addUser.username,
            profile_img: addUser.profileImage,
          });
        } else {
          console.log("Token generation failed : generateTokenAndSetCookie() in user not exits case");
          res.status(400).json({
            err: "Token generation failed : generateTokenAndSetCookie() in user not exits case",
          });
        }
      } else {
        res.status(400).json({ err: "database issue" });
      }
    } else {
      const complete = generateTokenAndSetCookie(userDetails._id, res);

      if (complete) {
        res.status(200).json({
          _id: userDetails._id,
          fullname: userDetails.fullname,
          username: userDetails.username,
          profile_img: userDetails.profileImage,
          friends: userDetails.friends
        });
      } else {
        console.log("Token generation failed : generateTokenAndSetCookie() in user exits case");
        res.status(400).json({
          err: "Token generation failed : generateTokenAndSetCookie() in user exits case",
        });
      }
    }
  } catch (error) {
    console.log(`Error in logging in ${error}`);
    res.status(500).json({ err: `Internal Server Error` });
  }
};

export const userLogOut = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "logged out successfully" });
  } catch (error) {
    console.log(`Error in logging out ${error}`);
    res.status(500).json({ err: `Internal Server Error` });
  }
};
