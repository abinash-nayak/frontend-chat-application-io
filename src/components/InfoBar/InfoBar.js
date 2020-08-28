import React from "react";

import onlineIcon from "../../icons/onlineIcon.png";
import closeIcon from "../../icons/closeIcon.png";
import faceIcon from "../../icons/face.png";

import "./InfoBar.css";

const InfoBar = ({
  room,
  handleShowMembers,
  membersView,
  handleCloseClick,
}) => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img className="onlineIcon" src={onlineIcon} alt="online icon" />
        <h3>{room}</h3>
        {!membersView && (
          <img
            onClick={handleShowMembers}
            className="faceIcon"
            src={faceIcon}
            alt="online icon"
          />
        )}
      </div>
      <div className="rightInnerContainer">
        {membersView ? (
          <img
            className="closeIcon"
            onClick={handleCloseClick}
            src={closeIcon}
            alt="close icon"
          />
        ) : (
          <a href="/">
            <img src={closeIcon} alt="close icon" />
          </a>
        )}
      </div>
    </div>
  );
};

InfoBar.defaultProps = {
  room: "Virtual Room",
  handleShowMembers: () => {},
  handleCloseClick: () => {},
  membersView: false,
};

export default InfoBar;
