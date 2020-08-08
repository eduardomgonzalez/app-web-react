import React from "react";
import { TableHead, TableRow, TableCell } from "@material-ui/core/";

const Tablehead = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Nombre</TableCell>
        <TableCell>Oficio</TableCell>
        <TableCell>Eliminar</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default Tablehead;
