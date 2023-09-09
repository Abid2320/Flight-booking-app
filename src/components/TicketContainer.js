import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import TicketFeed from "../features/ticketSlice/TicketFeed";
import EmptyTicket from "./EmptyTicket";

const TicketContainer = () => {
  const tickets = useSelector((state) => state.tickets.tickets);

  return (
    <Box
      sx={{
        padding: "93px 110px",
        background: "#252525",
        border: "1px solid #373536",
        borderRadius: "10px",
        width: "100%",
        position: "relative",
        marginBlockEnd: "64px",
      }}
    >
      {tickets.length > 0 ? <TicketFeed /> : <EmptyTicket />}
    </Box>
  );
};

export default TicketContainer;
