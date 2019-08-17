import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";

export default function Like({ liked, onClick }) {
  return (
    <div>
      <FontAwesomeIcon
        icon={liked ? fasHeart : farHeart}
        style={{ cursor: "pointer" }}
        onClick={onClick}
      />
    </div>
  );
}
