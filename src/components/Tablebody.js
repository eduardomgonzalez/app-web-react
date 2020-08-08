import React from "react";
import { Button, TableBody, TableRow, TableCell } from "@material-ui/core";

const Tablebody = ({ users, deleteUser }) => {
  let usersValues = users.map((user, index) => (
    <TableRow key={index}>
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.job}</TableCell>
      <TableCell>
        <Button
          className="Mui-button"
          variant="contained"
          color="secondary"
          onClick={() => deleteUser(index)}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  ));

  return <TableBody>{usersValues}</TableBody>;
};

export default Tablebody;
