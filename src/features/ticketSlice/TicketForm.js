import {
  Box,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Button,
  FormHelperText,
} from "@mui/material";
import React, { useState } from "react";
import CsTextField from "../../components/csTextField";
import CsFormControl from "../../components/CsFormControl";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { ticketAdded } from "./TicketSlice";

const TicketForm = () => {
  //user data state
  const [ticket, setTicket] = useState({
    id: nanoid(),
    from: "",
    to: "",
    date: "",
    adults: "",
    children: "",
    class: "",
  });
  //handling input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTicket((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [errorText, setErrorText] = useState("");
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();

  const validation = () => {
    if (
      !ticket.from ||
      !ticket.to ||
      !ticket.date ||
      !ticket.adults ||
      !ticket.children ||
      !ticket.class
    ) {
      setErrorText("Required");
      setShowError(true);
    } else {
      setErrorText("");
      setShowError(false);
      dispatch(ticketAdded(ticket));
    }
  };
  const handleSubmit = () => {
    validation();
    setTicket({
      id: "",
      from: "",
      to: "",
      date: "",
      adults: "",
      children: "",
      class: "",
    });
  };
  return (
    <Box sx={{ width: "1536px", marginInline: "auto" }}>
      <Box
        sx={{
          width: "100%",
          height: "587px",
          background: "#252525",
          border: "1px solid #373536",
          borderRadius: "10px",
          padding: "93px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "61px",
            marginBlockEnd: "51px",
          }}
        >
          <Box sx={{ display: "flex", gap: "300px" }}>
            <Box>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: "regular",
                  color: "#FFFCF9",
                  marginBlockEnd: "35px",
                }}
              >
                FROM
              </Typography>
              <CsFormControl variant="standard">
                <InputLabel>Destination from</InputLabel>
                <Select
                  value={ticket.from}
                  onChange={handleChange}
                  label="Destination from"
                  name="from"
                  error={!ticket.from && showError}
                  required
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Dhaka">Dhaka</MenuItem>
                  <MenuItem value="Chittagong">Chittagong</MenuItem>
                  <MenuItem value="Rajshahi">Rajshahi</MenuItem>
                  <MenuItem value="Sylhet">Sylhet</MenuItem>
                  <MenuItem value="Mymensingh">Mymensingh</MenuItem>
                  <MenuItem value="Barisal">Barisal</MenuItem>
                  <MenuItem value="Rangpur">Rangpur</MenuItem>
                  <MenuItem value="Khulna">Khulna</MenuItem>
                </Select>
                <FormHelperText>
                  {!ticket.from ? errorText : null}
                </FormHelperText>
              </CsFormControl>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: "regular",
                  color: "#FFFCF9",
                  marginBlockEnd: "35px",
                }}
              >
                TO
              </Typography>
              <CsFormControl variant="standard">
                <InputLabel>Destination to</InputLabel>
                <Select
                  error={!ticket.to && showError}
                  value={ticket.to}
                  onChange={handleChange}
                  label="Destination to"
                  name="to"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Dhaka">Dhaka</MenuItem>
                  <MenuItem value="Chittagong">Chittagong</MenuItem>
                  <MenuItem value="Rajshahi">Rajshahi</MenuItem>
                  <MenuItem value="Sylhet">Sylhet</MenuItem>
                  <MenuItem value="Mymensingh">Mymensingh</MenuItem>
                  <MenuItem value="Barisal">Barisal</MenuItem>
                  <MenuItem value="Rangpur">Rangpur</MenuItem>
                  <MenuItem value="Khulna">Khulna</MenuItem>
                </Select>
                <FormHelperText>{!ticket.to ? errorText : null}</FormHelperText>
              </CsFormControl>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: "regular",
                  color: "#FFFCF9",
                  marginBlockEnd: "35px",
                }}
              >
                DATE
              </Typography>
              <CsTextField
                helperText={!ticket.date ? errorText : null}
                error={!ticket.date && showError}
                value={ticket.date}
                onChange={handleChange}
                name="date"
                label=""
                variant="standard"
                type="date"
                sx={{
                  width: "250px",
                }}
              />
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: "300px" }}>
            <Box>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: "regular",
                  color: "#FFFCF9",
                  marginBlockEnd: "35px",
                }}
              >
                ADULTS
              </Typography>
              <CsFormControl variant="standard">
                <InputLabel id="demo-simple-select-standard-label">
                  How many adults
                </InputLabel>
                <Select
                  value={ticket.adults}
                  error={!ticket.adults && showError}
                  onChange={handleChange}
                  label="How many adults"
                  name="adults"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="1">One</MenuItem>
                  <MenuItem value="2">Two</MenuItem>
                  <MenuItem value="3">Three</MenuItem>
                  <MenuItem value="4">Four</MenuItem>
                  <MenuItem value="5">Five</MenuItem>
                </Select>
                <FormHelperText>
                  {!ticket.adults ? errorText : null}
                </FormHelperText>
              </CsFormControl>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: "regular",
                  color: "#FFFCF9",
                  marginBlockEnd: "35px",
                }}
              >
                CHILDREN
              </Typography>
              <CsFormControl variant="standard">
                <InputLabel id="demo-simple-select-standard-label">
                  How many children
                </InputLabel>
                <Select
                  value={ticket.children}
                  onChange={handleChange}
                  label="How many children"
                  name="children"
                  error={!ticket.children && showError}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="1">One</MenuItem>
                  <MenuItem value="2">Two</MenuItem>
                  <MenuItem value="3">Three</MenuItem>
                  <MenuItem value="4">Four</MenuItem>
                  <MenuItem value="5">Five</MenuItem>
                </Select>
                <FormHelperText>
                  {!ticket.children ? errorText : null}
                </FormHelperText>
              </CsFormControl>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: "regular",
                  color: "#FFFCF9",
                  marginBlockEnd: "35px",
                }}
              >
                CLASS
              </Typography>
              <CsFormControl variant="standard">
                <InputLabel id="demo-simple-select-standard-label">
                  Choose class
                </InputLabel>
                <Select
                  value={ticket.class}
                  onChange={handleChange}
                  name="class"
                  label="How many children"
                  error={!ticket.class && showError}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="economy">Economy</MenuItem>
                  <MenuItem value="premium economy">Premium economy</MenuItem>
                  <MenuItem value="business">Business</MenuItem>
                  <MenuItem value="first Class">First class</MenuItem>
                </Select>
                <FormHelperText>
                  {!ticket.class ? errorText : null}
                </FormHelperText>
              </CsFormControl>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            onClick={handleSubmit}
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
            BOOK
          </Button>
          <Typography
            sx={{
              color: "#FFA400",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "18px",
              fontWeight: "400",
            }}
          >
            Privacy Plicy
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TicketForm;
