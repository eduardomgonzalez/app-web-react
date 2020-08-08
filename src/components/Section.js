import React, { useState } from "react";
import TableComponent from "./TableComponent";
import Form from "./Form";
import Swal from "sweetalert2";
import { forwardRef } from "react";

const Section = forwardRef(({ date, handleUpload }, ref) => {
  const [users, setUsers] = useState([
    {
      name: "Luis",
      job: "Programador",
    },
    {
      name: "Noelia",
      job: "Profesora",
    },
    {
      name: "Ada",
      job: "Científica",
    },
    {
      name: "Bill Gates",
      job: "Programador",
    },
    {
      name: "Gary McKinnon",
      job: "Administrador",
    },
    {
      name: "Elon Musk",
      job: "Físico",
    },
  ]);

  const deleteUser = (index) => {
    Swal.fire({
      title: "Estás seguro?",
      text: "Eliminará un registro",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          title: "Eliminado!",
          text: "Acaba de eliminar un registro",
          icon: "success",
        });
        setUsers(users.filter((user, i) => i !== index));
      }
    });
  };

  return (
    <section className="section">
      <div className="date">
        <h4>{date}</h4>
      </div>
      <div className="data">
        <TableComponent users={users} deleteUser={deleteUser} />
        <Form setUsers={setUsers} handleUpload={handleUpload} ref={ref} />
      </div>
    </section>
  );
});

export default Section;
