import React from "react";

const UserName = ({ user }) => {
  const { nombre, apellido } = user;
  return (
    <h4>
      Hola, {nombre} {apellido}
    </h4>
  );
};

export default UserName;
