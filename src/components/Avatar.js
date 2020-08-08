import React from "react";
import AvatarLogo from "../assets/avatar.png";
import { forwardRef } from "react";

const Avatar = forwardRef((props, ref) => {
  return (
    <img
      src={AvatarLogo}
      alt="avatar"
      className="avatar__img"
      id="img-avatar"
      ref={ref}
    />
  );
});

export default Avatar;
