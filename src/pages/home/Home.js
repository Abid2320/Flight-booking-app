import { Box, Typography } from "@mui/material";
import React from "react";
import NavBar from "../../components/NavBar";
import heroBg from "../../assets/hero-bg.png";
import HeroContent from "../../components/HeroContent";
import TicketForm from "../../features/ticketSlice/TicketForm";
import TicketContainer from "../../components/TicketContainer";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          height: "900px",
          backgroundImage: `url(${heroBg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%",
          paddingBlockStart: "50px",
        }}
      >
        <Box sx={{ width: "1536px", marginInline: "auto" }}>
          <Box sx={{}}>
            <NavBar />
          </Box>
          <Box>
            <HeroContent />
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: "1536px", marginInline: "auto" }}>
        <Typography
          sx={{
            fontFamily: "'Anton', sans-serif",
            textTransform: "uppercase",
            fontSize: "45px",
            color: "#FFFCF9",
            marginBlock: "61px",
            textAlign: "center",
          }}
        >
          BOOK A FLIGHT
        </Typography>
      </Box>
      <Box>
        <TicketForm />
      </Box>
      <Box sx={{ width: "1536px", marginInline: "auto" }}>
        <Typography
          sx={{
            fontFamily: "'Anton', sans-serif",
            textTransform: "uppercase",
            fontSize: "45px",
            color: "#FFFCF9",
            marginBlock: "61px",
            textAlign: "center",
          }}
        >
          BOOKED FLIGHT
        </Typography>
        <Box>
          <TicketContainer></TicketContainer>
        </Box>
      </Box>
    </>
  );
};

export default Home;
