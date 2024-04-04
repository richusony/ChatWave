import { userModel } from "../../models/userSchema.js";

export const getUsersForSidebar = async (req, res) => {
try {
    const loggedInUserId = req.user._id;

    const filteredUsers = await userModel.find({_id: {$ne: loggedInUserId}})
    res.status(200).json(filteredUsers);
} catch (error) {
    res.status(500).json({err: "Internal Server Error : getUsersForSiderbar"})
}
}