import { Box, Typography } from "@mui/material";
import React from "react";

const EmptyTicket = () => {
  return (
    <Box
      sx={{
        padding: "150px 0",
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          fontFamily: "'Anton', sans-serif",
          textTransform: "uppercase",
          fontSize: "24px",
          color: "#9C9C9C",
          marginBlock: "61px",
          textAlign: "center",
        }}
      >
        NO BOOKED FLIGHT YET
      </Typography>
    </Box>
  );
};

export default EmptyTicket;
