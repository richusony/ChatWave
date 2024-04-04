import userModel from "../../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
try {
    const loggedInUserId = req.user._id;

    const filteredUsers = await userModel.find({_id: {$ne: loggedInUserId}})
    res.status(200).json(filteredUsers);
} catch (error) {
    res.status(500).json({err: "Internal Server Error : getUsersForSiderbar"})
}
}

export const getUserDetails = async (req, res) => {
    const {id} = req.params;
    try {
        const user = await userModel.findById(id);
        if (user) {
            return res.status(200).json(user);
        } else {
            return res.status(404).json({err:"user not found : getUserDetails"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({err:"Internal server error : getUserDetails"})
    }
}