import { userModel } from "../../models/userSchema.js";
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
        generateTokenAndSetCookie(addUser._id, res);
        res.status(201).json({
          _id: addUser._id,
          fullname: addUser.fullname,
          username: addUser.username,
          profile_img: addUser.profileImage,
        });
      } else {
        res.status(400).json({ err: "database issue" });
      }
    } else {
      generateTokenAndSetCookie(userDetails._id, res);
 
      res.status(200).json({
        _id: userDetails._id,
        fullname: userDetails.fullname,
        username: userDetails.username,
        profile_img: userDetails.profileImage,
      });
    }
  } catch (error) {
    console.log(`Error in logging in ${error}`);
    res.status(500).json({ err: `Internal Server Error` });
  }
};
