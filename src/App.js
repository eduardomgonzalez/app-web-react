import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Swal from "sweetalert2";

function App() {
  const [date, setDate] = useState(new Date());

  // Creo referencias
  const refAvatar = React.createRef();
  const refInputFile = React.createRef();
  const refInputName = React.createRef();

  useEffect(() => {
    function tictac() {
      setDate(new Date());
    }

    const timerId = setInterval(() => tictac(), 1000);

    return function detenerIntervalo() {
      clearInterval(timerId);
    };
  });

  // Cambia al avatar en el header y muestra un modal con vista
  const handleUpload = () => {
    if (refInputFile.current.files[0]) {
      // Creo un objeto de la clase FileReader
      let reader = new FileReader();
      // Leo el archivo y se lo paso al objeto FileReader
      reader.readAsDataURL(refInputFile.current.files[0]);

      // Cuando este listo ejecute el código interno
      reader.onload = () => {
        // Obtengo el <span> donde voy a poner el nombre de la imagen luego de cargarla
        let imageName = refInputName.current;
        imageName.textContent = refInputFile.current.files[0].name;

        // Obtengo el elemento de mi Avatar
        let avatar = refAvatar.current;
        // Lo coloco en mi avatar
        avatar.src = reader.result;

        // Vista previa con ventana modal de SweetAlert2
        Swal.fire({
          imageUrl: reader.result,
          imageWidth: 250,
          imageAlt: "Avatar",
        });
      };
    }
  };

  return (
    <div className="App">
      <Header ref={refAvatar} />
      <Section
        date={date.toLocaleTimeString()}
        handleUpload={handleUpload}
        ref={{ inputFile: refInputFile, inputName: refInputName }}
      />
      <Footer />
    </div>
  );
}

export default App;
