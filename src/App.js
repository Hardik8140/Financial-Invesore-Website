import style from "./App.css";
import { Container, theme } from "@chakra-ui/react";
import Navbar from "./Routes/Navbar";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <Container maxW="container.xlsm" className={theme}>
      <Navbar />
      <AllRoutes />
    </Container>
  );
}

export default App;
