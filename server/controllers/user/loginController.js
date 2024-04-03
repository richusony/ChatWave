import { userModel } from "../../models/userSchema.js";

export const loginSignUp = async (req, res) => {
  const { email, fullname, profile_img } = req.body;

  const userDetails = await userModel.findOne({ email });
  if (!userDetails) {
    const addUser = await userModel.create({
      email: email,
      fullname: fullname,
      profileImage: profile_img,
      blocked: false,
    });
    if (addUser) {
      res.status(201).json({ msg: "user account created" });
    } else {
      res.status(500).json({ err: "database issue" });
    }
  } else {
    res.status(200);
  }
};
