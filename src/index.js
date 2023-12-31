import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { extendTheme } from "@chakra-ui/react";
import AuthContextProvider from "./Context/AuthContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = extendTheme({
  colors: {
    brand: {
      100: "#073818",
      // ...
      900: "#1a202c",
    },
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
});
root.render(
  <AuthContextProvider>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        {/* <React.StrictMode> */}
        <App />
        {/* </React.StrictMode> */}
      </ChakraProvider>
    </BrowserRouter>
  </AuthContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
