import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatPage = () => {
  // useState is a hook that allows us to create a state variable and set it to a value or update it to a new value.
  const [chats, setChats] = useState([]);
  const fetchChats = async () => {
    const data = await axios.get("/api/chat");
    //the above line is getting the data from the server.js file where the endpoint is defined
    setChats(data.data);
    //in the above line, 1st data is the object and 2nd data is the property of the object which is an array in this case
    console.log(data.data);
  };
  // useEffect is a hook that is used to run a piece of code based on a specific condition.
  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      {chats.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
    </div>
  );
};

export default ChatPage;
