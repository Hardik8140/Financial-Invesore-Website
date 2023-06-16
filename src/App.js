import style from "./App.css";
import { Box, Container, theme } from "@chakra-ui/react";
import Navbar from "./Routes/Navbar";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    // <Container minW="1310px" className={theme}>
    <Box>
      <Navbar />
      <AllRoutes />
    </Box>
    // </Container>
  );
}

export default App;
