// import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "components/Header";
import OptionsTab from "components/OptionsTab";
import Container from "@mui/material/Container";
import LocationCards from "components/LocationCards";
import React from "react";
import Footer from "components/Footer";
import FooterMenu from "components/FooterMenu";
import { displayOnDesktop } from "themes/commonStyles";
import MobileFooter from "components/MobileFooter";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Box>
          <Header />
          <OptionsTab />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            height: 100,
            overflowY: "scroll",
          }}
        >
          <Container maxWidth="xl" sx={{ mb: 3 }}>
            <LocationCards />
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              <MobileFooter />
            </Box>
          </Container>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <FooterMenu />
        </Box>
        <Box sx={displayOnDesktop}>
          <Footer />
        </Box>
      </Box>
    </React.Fragment>
  );
  // // La variable data es la que va a almacenar los datos de "stays.json" y setData nos ayudará a guardar esos datos en esa variable. Es necesario que inicialicemos esa variable como un array vacío para evitar errores.
  // const [data, setData] = useState([]);

  // // Función para traer los datos de "stays.json".
  // const getData = async () => {
  //   // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
  //   try {
  //     const res = await fetch("stays.json");
  //     const resJson = await res.json();
  //     // Aquí guardamos los datos de "stays.json" en la variable data.
  //     setData(resJson);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // // Este Hook te va a ejecutar la función getData cada vez que la página se renderice.
  // useEffect(() => {
  //   getData();
  // }, []);

  // // Puedes ver la variable data en consola.
  // console.log(data);
  // return (
  //   <>
  //     {/* Aquí te dejo un ejemplo de cómo podrías imprimir varios elementos a la vez. */}
  //     {data.map((el, i) => {
  //       return <h1 key={i}>{el.city}</h1>;
  //     })}
  //   </>
  // );
}

export default App;
