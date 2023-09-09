import { Box, Button, Typography } from "@mui/material";
import React from "react";

const HeroContent = () => {
  return (
    <Box
      sx={{
        marginBlockStart: "230px",
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          fontFamily: "'Anton', sans-serif",
          textTransform: "uppercase",
          fontSize: "64px",
          color: "#FFFCF9",
          marginBlockEnd: "25px",
        }}
      >
        Cheap Flights for Your Next Adventure
      </Typography>
      <Typography
        sx={{
          width: "860px",
          marginInline: "auto",
          fontSize: "16px",
          fontFamily: "'Poppins', sans-serif",
          color: "#FFFCF9",
          marginBlockEnd: "40px",
        }}
      >
        Our flight booking website offers a seamless and hassle-free experience
        for booking flights to destinations around Bangladesh. With our powerful
        search engine, you can easily find flights that meet your specific needs
        and preferences.
      </Typography>
      <Button
        sx={{
          fontSize: "18px",
          fontWeight: "semi-bold",
          fontFamily: "'Poppins', sans-serif",
          padding: "16px 32px",
          color: "#FFFCF9",
          backgroundColor: "#FFA400",
          borderRadius: "10px",
        }}
      >
        LEARN MORE
      </Button>
    </Box>
  );
};

export default HeroContent;
