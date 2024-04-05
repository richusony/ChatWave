import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";

useSocketContext;
const useRealTimeMsg = (messages, setMessages) => {
  const { socket } = useSocketContext();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      setMessages([...messages, newMessage]);
    });

    return () => socket?.off("newMessage");
  }, [socket, messages, setMessages]);
};

export default useRealTimeMsg;
