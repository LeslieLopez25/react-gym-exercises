import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/navbar.component";
import Home from "./pages/home.component";
import ExerciseDetail from "./pages/exercise-detail.component";
import Footer from "./components/footer.component";

const App = () => {
  return (
    <Box
      width="400px"
      sx={{ width: { xl: "1488px" } }}
      m="auto"
      bgcolor="#353839"
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
