import groupModel from "../../models/group.model.js";
import notificationModel from "../../models/notification.model.js";
import userModel from "../../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const userDetails = await userModel
      .findById(loggedInUserId)
      .populate({
        path: "friends.friendId", // Populate the 'friendId' field of 'friends' array
        model: "users", // Reference model to populate from
        select: "fullname username email profileImage", // Specify which fields to include
      })
      .exec();

    const uniqueUsersMap = new Map(); // Use a Map to track unique friendIds
    userDetails.friends.forEach((friend) => {
      const { friendId, status } = friend;
      uniqueUsersMap.set(friendId._id.toString(), {
        _id: friendId._id,
        fullname: friendId.fullname,
        username: friendId.username,
        email: friendId.email,
        profileImage: friendId.profileImage,
        status,
      });
    });

    const filteredUsers = [...uniqueUsersMap.values()];

    res.status(200).json(filteredUsers);
  } catch (error) {
    res
      .status(500)
      .json({ err: "Internal Server Error : getUsersForSiderbar" });
  }
};

export const getUserDetails = async (req, res) => {
  const { id } = req.params;
  console.log("userId ::: ", id);
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

export const followUserRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const currentUser = req.user._id;

    // Check if a notification already exists for the user
    const existingNotification = await notificationModel.findOne({
      userId: id,
      "notification.notificationType": "follow-request",
      senderId: currentUser, // Check for follow-request notification
    });

    if (!existingNotification) {
      // If no existing notification, create a new follow request notification
      const newNotification = await notificationModel.create({
        userId: id,
        notification: {
          notificationType: "follow-request",
        },
        senderId: currentUser,
      });

      const hasUserRelation = await userModel.findOne({
        _id: currentUser,
        "friends.friendId": id,
      });
      if (!hasUserRelation) {
        const createRelation = await userModel.updateOne(
          { _id: currentUser },
          {
            $push: {
              friends: {
                friendId: id,
                status: false,
              },
            },
          }
        );
      }

      res.status(201).json({
        message: "Follow request notification created",
        newNotification,
      });
    } else {
      res
        .status(400)
        .json({ error: "Follow request notification already exists" });
    }
  } catch (error) {
    console.error("Error creating follow request notification:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getNotifications = async (req, res) => {
  try {
    const currentUserId = req.user._id;
    const notifications = await notificationModel
      .find({ userId: currentUserId })
      .populate("senderId");

    if (notifications.length > 0) {
      res.status(200).json(notifications);
    } else {
      res.status(200).json([]);
    }
  } catch (error) {
    console.error("Error fetching notifications:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const acceptFriendRequest = async (req, res) => {
  const currentUserId = req.user._id;
  const { id } = req.params;

  try {
    // Update the friend request status in the other user's document
    const updatedUser = await userModel.findOneAndUpdate(
      { _id: id, "friends.friendId": currentUserId },
      { $set: { "friends.$.status": true } }, // Update the status to true for the specific friendId
      { new: true } // Return the updated document
    );

    // Add the corresponding relation to the current user's document
    const updateCurrentUserRelation = await userModel.updateOne(
      { _id: currentUserId },
      {
        $push: {
          friends: {
            friendId: id,
            status: true,
          },
        },
      }
    );

    const deleteUserNotification = await notificationModel.deleteOne({
      userId: currentUserId,
      senderId: id,
    });
    const sendRequestAcceptNotification = await notificationModel.create({
      userId: id,
      notification: { notificationType: "accept-request" },
      senderId: currentUserId,
    });
    if (updatedUser && updateCurrentUserRelation) {
      res.status(200).json({ message: "Friend request accepted successfully" });
    } else {
      res.status(404).json({ error: "User or friend request not found" });
    }
  } catch (error) {
    console.error("Error accepting friend request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getUserFriendsList = async (req, res) => {
  const currentUserId = req.user._id;
  const userDetails = await userModel.findById(currentUserId);
  const friendsList = userDetails.friends;
  res.status(200).json(friendsList);
};

export const getUserFriendsListGroup = async (req, res) => {
  const currentUserId = req.user._id;
  const userDetails = await userModel
    .findOne({ _id: currentUserId })
    .populate("friends.friendId");
  const friendsList = userDetails.friends;
  res.status(200).json(friendsList);
};

export const blockUser = async (req, res) => {
  const currentUser = req.user._id;
  const blockUserId = req.params.id;
  console.log("blocking id :: ", blockUserId);

  // Update the correct friend object in the user's friends array
  const updatedUser = await userModel.findOneAndUpdate(
    {
      _id: currentUser,
      "friends.friendId": blockUserId,
    },
    { $set: { "friends.$.blockByUser": true } },
    { new: true }
  );

  if (!updatedUser) {
    return res.status(404).json({ error: "User or friend not found." });
  }

  res.status(200).json(updatedUser);
};
export const unBlockUser = async (req, res) => {
  const currentUser = req.user._id;
  const unBlockUserId = req.params.id;

  // Update the correct friend object in the user's friends array
  const updatedUser = await userModel.findOneAndUpdate(
    {
      _id: currentUser,
      "friends.friendId": unBlockUserId,
    },
    { $set: { "friends.$.blockByUser": false } },
    { new: true }
  );

  if (!updatedUser) {
    return res.status(404).json({ error: "User or friend not found." });
  }

  res.status(200).json(updatedUser);
};

export const getGroups = async (req, res) => {
    const currentUserId = req.user._id;

    try {
        const groups = await groupModel.find({ participants: { $in: [currentUserId] } }).exec();
        res.status(200).json(groups);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch groups." });
    }
}