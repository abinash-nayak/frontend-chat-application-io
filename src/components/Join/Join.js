import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

export default function SignIn() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Virtual Chat Room</h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Room"
            className="joinInput mt-20"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link to={`/chat?name=${name}&room=${room}`}>
          <button
            disabled={name && room ? false : true}
            style={name && room ? null : { opacity: 0.8 }}
            className={"button mt-20"}
            type="submit"
          >
            JOIN
          </button>
        </Link>
      </div>
      <div className="footer">
        <span>
          Design and Developed by <b>Abinash Nayak</b>
        </span>
      </div>
    </div>
  );
}
