import React from "react";
import { Typography, Box, Stack } from "@mui/material";

import HorizontalScrollbar from "./horizontal-scrollbar.component";
import Loader from "./loader.component";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <Box sx={{ mt: { lg: "100px", xs: "0px" } }}>
    <Typography
      sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "20px" }}
      fontWeight={700}
      color="#fff"
      mb="33px"
    >
      Similar{" "}
      <span style={{ color: "#fff600", textTransform: "capitalize" }}>
        Target Muscle
      </span>{" "}
      exercises
    </Typography>
    <Stack direction="row" sx={{ p: 3, position: "relative" }}>
      {targetMuscleExercises.length !== 0 ? (
        <HorizontalScrollbar data={targetMuscleExercises} />
      ) : (
        <Loader />
      )}
    </Stack>
    <Typography
      sx={{
        fontSize: { lg: "44px", xs: "25px" },
        ml: "20px",
        mt: { lg: "100px", xs: "60px" },
      }}
      fontWeight={700}
      color="#fff"
      mb="33px"
    >
      Similar{" "}
      <span style={{ color: "#fff600", textTransform: "capitalize" }}>
        Equipment
      </span>{" "}
      exercises
    </Typography>
    <Stack direction="row" sx={{ p: 3, position: "relative" }}>
      {equipmentExercises.length !== 0 ? (
        <HorizontalScrollbar data={equipmentExercises} />
      ) : (
        <Loader />
      )}
    </Stack>
  </Box>
);

export default SimilarExercises;
