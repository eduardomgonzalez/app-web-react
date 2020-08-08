import React, { useState } from "react";
import { forwardRef } from "react";
import Error from "./Error";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  Grid,
  InputAdornment,
} from "@material-ui/core";

import { AccountCircle, Work } from "@material-ui/icons";

const Form = forwardRef(({ setUsers, handleUpload }, ref) => {
  const [data, setData] = useState({
    name: "",
    job: "",
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validacion de inputs vacíos
    if (data.name.trim() === "" || data.job.trim() === "") {
      setError(true);
      return;
    }
    setUsers((users) => [...users, data]);
    setError(false);
    setData({
      name: "",
      job: "",
    });
  };

  return (
    <Grid item md={4}>
      <section className="form">
        {/* Cargar datos */}
        <form className="form-material" onSubmit={handleSubmit}>
          {error && <Error mensaje="Ambos campos son obligatorios" />}
          <h2 className="form-material__title">Agregar Datos</h2>
          <Grid container>
            <Grid item md={12}>
              <FormControl>
                <InputLabel htmlFor="name">Nombre</InputLabel>
                <Input
                  startAdornment={
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  }
                  id="name"
                  name="name"
                  type="text"
                  value={data.name}
                  onChange={handleChange}
                ></Input>
              </FormControl>
            </Grid>
            <Grid item md={12}>
              <FormControl>
                <InputLabel htmlFor="job">Oficio</InputLabel>
                <Input
                  startAdornment={
                    <InputAdornment position="start">
                      <Work />
                    </InputAdornment>
                  }
                  id="job"
                  name="job"
                  type="text"
                  value={data.job}
                  onChange={handleChange}
                ></Input>
              </FormControl>
            </Grid>
            <Grid item md={12}>
              <Button variant="contained" color="primary" type="submit">
                Cargar Datos
              </Button>
            </Grid>
          </Grid>
        </form>

        {/* Cargar Avatar */}
        <div className="avatar">
          <h2 className="avatar__title">Cambiar Avatar</h2>
          <div className="avatar__field">
            <label htmlFor="inputId">Selecionar archivo</label> <br />
            <input
              type="file"
              name=""
              id="inputId"
              ref={ref.inputFile}
              accept="image/*"
            />
            <span id="input-name" ref={ref.inputName}></span>
          </div>
          <div className="">
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={handleUpload}
            >
              Guardar
            </Button>
          </div>
        </div>
      </section>
    </Grid>
  );
});

export default Form;
