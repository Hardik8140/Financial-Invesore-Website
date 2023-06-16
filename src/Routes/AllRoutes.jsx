import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Page/Homepage";
import Docs from "../Page/Docs";
import Security from "../Page/Security";
import Faq from "../Page/Faq";
import Login from "../Page/Login";
import SignUp from "../Page/signup";
import PrivateRoute from "./privateRouter";
import IeData from "../Page/ieData";

const AllRoutes = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/security" element={<Security />} />
        <Route path="/faq" element={<Faq />} />
        <Route
          path="/ieData"
          element={
            <PrivateRoute>
              <IeData />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Box>
  );
};

export default AllRoutes;
