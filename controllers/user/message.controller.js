import Conversation from "../../models/conversation.model.js";
import groupModel from "../../models/group.model.js";
import groupMessagesModel from "../../models/groupMessages.model.js";
import Message from "../../models/message.model.js";
import userModel from "../../models/user.model.js";
import { getReceiverSocketId, io } from "../../socket/socket.js";

// Individual chat
export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    const receiverDetails = await userModel.findById(receiverId);
    const friendsList = receiverDetails.friends.filter(
      (friend) => friend.friendId.toString() == senderId
    );
    const isBlocked = friendsList[0].blockByUser;
    if (isBlocked)
      return res.status(403).json({
        err: "You've been blocked by user" + " " + receiverDetails.fullname,
      });

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    await Promise.all([conversation.save(), newMessage.save()]);

    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ err: "Internal Server Error" });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    })
      .populate("messages")
      .sort({ createdAt: 1 });

    if (!conversation) return res.status(200).json([]);
    const messages = conversation.messages;
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ err: "Internal Server Error : getMessage" });
  }
};

export const getAllMessages = async (req, res) => {
  const currentLoggedInUser = req.user._id;
  const conversation = await Message.aggregate([
    // Match messages for the specific receiverId
    { $match: { receiverId: currentLoggedInUser } },

    // Sort messages by createdAt in descending order
    { $sort: { createdAt: -1 } },

    // Group by senderId and take the first message for each sender
    {
      $group: {
        _id: "$senderId",
        latestMessage: { $first: "$$ROOT" }, // $$ROOT includes the entire message document
      },
    },

    // Project to reshape the output if needed
    {
      $project: {
        _id: 0, // Exclude _id field from the output
        senderId: "$latestMessage.senderId",
        receiverId: "$latestMessage.receiverId",
        message: "$latestMessage.message",
        createdAt: "$latestMessage.createdAt",
      },
    },

    // Optionally, populate senderId with user details
    {
      $lookup: {
        from: "users",
        localField: "senderId",
        foreignField: "_id",
        as: "senderInfo",
      },
    },

    // Optionally, unwind senderInfo array if needed
    { $unwind: { path: "$senderInfo", preserveNullAndEmptyArrays: true } },

    // Optionally, project to include sender's name or other details
    {
      $project: {
        senderId: 1,
        receiverId: 1,
        message: 1,
        createdAt: 1,
        "senderInfo.fullname": 1,
        "senderInfo.email": 1,
        "senderInfo.profileImage": 1,
        // Add more fields from senderInfo as needed
      },
    },
  ]);

  res.status(200).json(conversation);
};

// Group chat
export const createGroup = async (req, res) => {
  try {
    const currentUser = req.user._id;
    const { groupName, members } = req.body;
    console.log(req.body);

    const groupMembers = await groupModel.create({
      groupName: groupName,
      groupAdmins: [currentUser],
      participants: [currentUser, ...members],
    });

    if (groupMembers) {
      res.status(201).json(groupMembers);
    } else {
      res.status(400).json({err: "Couldn't create group : createGroup"});
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({err: "Internal server error : createGroup"});
  }
};

export const getGroupDetails = async (req, res) => {
  const {groupId} = req.params;
  try {
    const groupData = await groupModel.findById(groupId).populate(["groupAdmins", "participants", "messages"]);
    if (groupData) {
      res.status(200).json(groupData)
    } else {
      res.status(404).json({err: "group not found : getGroupDetails"})
    }
  } catch (error) {
    res.status(500).json({err: "Internal server error : getGroupDetails"})
  }
}

export const sendMessageToGroup = async (req, res) => {
try {
    const { message } = req.body;
    const { groupId } = req.params;
    const senderId = req.user._id;

    const groupDetails = await groupModel.findById(groupId);

    const newMessage = new groupMessagesModel({
      senderId,
      groupId,
      message,
    });

    if (newMessage) {
      groupDetails.messages.push(newMessage._id);
    }

    await Promise.all([groupDetails.save(), newMessage.save()]);

    // const receiverSocketId = getReceiverSocketId(receiverId);
    // if (receiverSocketId) {
    //   io.to(receiverSocketId).emit("newMessage", newMessage);
    // }
    io.to(groupDetails._id.toString()).emit("newMessageInGroup",newMessage)

    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ err: "Internal Server Error : sendMessageToGroup" });
  }
}