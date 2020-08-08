import React from "react";
import Tablehead from "./Tablehead";
import Tablebody from "./Tablebody";
import { Grid } from "@material-ui/core";
import { Table } from "@material-ui/core/";

const TableComponent = ({ users, deleteUser }) => {
  return (
    <Grid item xs={8}>
      <Table>
        <Tablehead />
        <Tablebody users={users} deleteUser={deleteUser} />
      </Table>
    </Grid>
  );
};

export default TableComponent;
