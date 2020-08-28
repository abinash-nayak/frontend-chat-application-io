import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import TextContainer from "../TextContainer/TextContainer";
import Messages from "../Messages/Messages";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";

import onlineIcon from "../../icons/onlineIcon.png";
import memberIcon from "../../icons/memberIcon.png";

import "./Chat.css";

let socket;

const Chat = ({ location, ...props }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [showMembers, setShowMembers] = useState(false);
  const ENDPOINT = "https://backend-chat-application-sio.herokuapp.com/";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
        props.history.push("/");
      }
    });
  }, [ENDPOINT, location.search, props.history]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  const handleShowMembers = () => {
    setShowMembers(true);
  };

  const handleCloseClick = () => {
    setShowMembers(false);
  };

  return (
    <div className="outerContainer">
      {showMembers ? (
        <div className="container">
          <InfoBar
            handleCloseClick={handleCloseClick}
            room={"Active Members"}
            membersView={true}
          />
          <div className="activeMembersOuterContainer">
            <div className="activeMembersContainer">
              {users.map(({ name }) => (
                <div key={name} className="activeMemberItem">
                  <img
                    alt="Member Icon"
                    src={memberIcon}
                    style={{ height: "40px", width: "40px", marginRight: "2%" }}
                  />
                  {name}
                  <img
                    alt="Online Icon"
                    src={onlineIcon}
                    style={{ marginLeft: "2%" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <InfoBar handleShowMembers={handleShowMembers} room={room} />
          <Messages messages={messages} name={name} />
          <Input
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        </div>
      )}
      <TextContainer users={users} />
      <div className="footer">
        <span>
          Design and Developed by <b>Abinash Nayak</b>
        </span>
      </div>
    </div>
  );
};

export default Chat;
