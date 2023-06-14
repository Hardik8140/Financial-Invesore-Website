import logo from "./logo.svg";
import style from "./App.css";
import { Container } from "@chakra-ui/react";
import Navbar from "./Routes/Navbar";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <Container maxW="container.xlsm" className={style.main}>
      <Navbar />
      <AllRoutes />
    </Container>
  );
}

export default App;
