import React from "react";
import UserName from "./UserName";
import Avatar from "./Avatar";
import { forwardRef } from "react";

const Header = forwardRef((props, ref) => {
  const user = {
    nombre: "Eduardo",
    apellido: "Gonzalez",
  };

  return (
    <header className="header">
      <h1>Striata</h1>
      <div className="header__right">
        <UserName user={user} />
        <Avatar ref={ref} />
      </div>
    </header>
  );
});

export default Header;
