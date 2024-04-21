import groupModel from "../models/group.model.js";

export const joinRooms = async (socket, userId) => {
     try {
        const groups = await groupModel.find({ participants: { $in: [userId] } }).exec();
        if(groups.length > 0) {
            groups.forEach((group) => {
                socket.join(group._id.toString());
                console.log(":::: Room created for : ",group.groupName);
            })
        }
    } catch (error) {
        console.log("Failed to fetch groups : joinRooms" );
    }
}