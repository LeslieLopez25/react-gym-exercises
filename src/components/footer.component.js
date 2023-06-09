import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="10px">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="200px" height="200px" />
        <Typography variant="h5" pb="10px" color="#fff600">
          Elite Surge © {new Date().getFullYear()}
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
