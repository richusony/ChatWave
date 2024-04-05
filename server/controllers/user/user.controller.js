import userModel from "../../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filteredUsers = await userModel.find({
      _id: { $ne: loggedInUserId },
    });
    res.status(200).json(filteredUsers);
  } catch (error) {
    res
      .status(500)
      .json({ err: "Internal Server Error : getUsersForSiderbar" });
  }
};

export const getUserDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.findById(id);
    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).json({ err: "user not found : getUserDetails" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ err: "Internal server error : getUserDetails" });
  }
};

export const getUsers = async (req, res) => {
  try {
    const { search } = req.body;
    const currentUserId = req.user._id;

    const findUser = await userModel.find({
      _id: { $ne: currentUserId }, // Exclude the current user
      $or: [
        { fullname: { $regex: search.trim(), $options: "i" } }, // Case-insensitive search for fullname
        { username: { $regex: search.trim(), $options: "i" } }, // Case-insensitive search for username
      ],
    });
    res.status(200).json(findUser);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
