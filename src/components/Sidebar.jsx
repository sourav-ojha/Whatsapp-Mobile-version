import React, { useEffect, useState } from "react";
import ChatIcon from "@material-ui/icons/Chat";
import SidebarChats from "./SidebarChats";
import db from "../services/firebase";
import "./css/Sidebar.css";
import { DonutLarge, MoreVert, Search } from "@material-ui/icons";
import { IconButton, Avatar } from "@material-ui/core";
import { useStateValue } from "../helpers/StateProvider";

export default function Sidebar() {
  const [rooms, setRooms] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
  const unsubscribe = db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
    return () => {
      unsubscribe();
    } 
  }, []);

  const createChat = () => {
    const roomName = prompt("Plaease Enter name for chat");

    if (roomName) {
      // db stuff
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src={user?.photoURL} />
        <div className="sidebar__header__icons">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <div className="chatIcon">

          <IconButton>
            <ChatIcon  />
            <div className="create_chat" onClick={createChat}>Create Room</div>
          </IconButton>
          </div>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__search__searchcontainer">
          <Search />
          <input
            type="text"
            name="chat_search"
            id="chat_search"
            placeholder="Enter you text"
          />
        </div>
      </div>
      <div className="sidebar__chats">
        
        {rooms.map((room) => (
          <SidebarChats key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  );
}
