import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ticketBg from "../../assets/ticket-bg.png";
import { cancelTicket } from "./TicketSlice";

const TicketFeed = () => {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.tickets.tickets);
  const handleCancel = (value) => {
    dispatch(cancelTicket(value));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "64px",
      }}>
      {tickets.map((ticket) => {
        return (
          <Box key={ticket.id}>
            <Box>
              <Box
                sx={{
                  border: "1px solid #373536",
                  backgroundImage: `url(${ticketBg})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  padding: "93px 0",
                }}>
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontWeight: "600",
                    fontFamily: "'Poppins', sans-serif",
                    color: "#FFFCF9",
                    textAlign: "center",
                    marginBlockEnd: "75px",
                  }}>
                  FLIGHT TICKET
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "60px",
                  }}>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "50px",
                    }}>
                    <Box sx={{ flex: "1" }}>
                      <Typography
                        sx={{
                          fontSize: "22px",
                          fontWeight: "400",
                          fontFamily: "'Poppins', sans-serif",
                          color: "#FFFCF9",
                          textAlign: "center",
                          marginBlockEnd: "32px",
                        }}>
                        FROM
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontWeight: "400",
                          fontFamily: "'Poppins', sans-serif",
                          color: "#A4A4A4",
                          textAlign: "center",
                          marginBlockEnd: "32px",
                        }}>
                        {ticket.from}
                      </Typography>
                    </Box>
                    <Box sx={{ flex: "1" }}>
                      <Typography
                        sx={{
                          fontSize: "22px",
                          fontWeight: "400",
                          fontFamily: "'Poppins', sans-serif",
                          color: "#FFFCF9",
                          textAlign: "center",
                          marginBlockEnd: "32px",
                        }}>
                        TO
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontWeight: "400",
                          fontFamily: "'Poppins', sans-serif",
                          color: "#A4A4A4",
                          textAlign: "center",
                          marginBlockEnd: "32px",
                        }}>
                        {ticket.to}
                      </Typography>
                    </Box>
                    <Box sx={{ flex: "1" }}>
                      <Typography
                        sx={{
                          fontSize: "22px",
                          fontWeight: "400",
                          fontFamily: "'Poppins', sans-serif",
                          color: "#FFFCF9",
                          textAlign: "center",
                          marginBlockEnd: "32px",
                        }}>
                        DATE
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontWeight: "400",
                          fontFamily: "'Poppins', sans-serif",
                          color: "#A4A4A4",
                          textAlign: "center",
                          marginBlockEnd: "32px",
                        }}>
                        {ticket.date}
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "50px",
                    }}>
                    <Box sx={{ flex: "1" }}>
                      <Typography
                        sx={{
                          fontSize: "22px",
                          fontWeight: "400",
                          fontFamily: "'Poppins', sans-serif",
                          color: "#FFFCF9",
                          textAlign: "center",
                          marginBlockEnd: "32px",
                        }}>
                        ADULTS
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontWeight: "400",
                          fontFamily: "'Poppins', sans-serif",
                          color: "#A4A4A4",
                          textAlign: "center",
                          marginBlockEnd: "32px",
                        }}>
                        {ticket.adults}
                      </Typography>
                    </Box>
                    <Box sx={{ flex: "1" }}>
                      <Typography
                        sx={{
                          fontSize: "22px",
                          fontWeight: "400",
                          fontFamily: "'Poppins', sans-serif",
                          color: "#FFFCF9",
                          textAlign: "center",
                          marginBlockEnd: "32px",
                        }}>
                        CHILDREN
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontWeight: "400",
                          fontFamily: "'Poppins', sans-serif",
                          color: "#A4A4A4",
                          textAlign: "center",
                          marginBlockEnd: "32px",
                        }}>
                        {ticket.children}
                      </Typography>
                    </Box>
                    <Box sx={{ flex: "1" }}>
                      <Typography
                        sx={{
                          fontSize: "22px",
                          fontWeight: "400",
                          fontFamily: "'Poppins', sans-serif",
                          color: "#FFFCF9",
                          textAlign: "center",
                          marginBlockEnd: "32px",
                        }}>
                        CLASS
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontWeight: "400",
                          fontFamily: "'Poppins', sans-serif",
                          color: "#A4A4A4",
                          textAlign: "center",
                          marginBlockEnd: "32px",
                        }}>
                        {ticket.class}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    padding: "0 157px",
                  }}>
                  <Button
                    onClick={() => {
                      handleCancel(ticket.id);
                    }}
                    sx={{
                      fontSize: "18px",
                      fontWeight: "600",
                      fontFamily: "'Poppins', sans-serif",
                      padding: "16px 32px",
                      color: "#FFFCF9",
                      border: "1px solid #FFA400",
                      borderRadius: "10px",
                      backgroundColor: "transparent",
                    }}>
                    CANCEL
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default TicketFeed;
