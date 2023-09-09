import { TextField, styled } from "@mui/material";

const CsTextField = styled(TextField)({
  ".MuiFormLabel-root": {
    color: "#A4A4A4",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "18px",
    fontWeight: "400",
  },
  ".MuiInputBase-root": {
    color: "#A4A4A4",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "18px",
    fontWeight: "400",
    marginBlockStart: "16px",
  },
  ".MuiInputBase-root::-webkit-calendar-picker-indicator": {
    filter: "#A4A4A4",
  },
  ".MuiFormHelperText-root": {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "15px",
    fontWeight: "400",
  },
  "& label.Mui-focused": {
    color: "#A4A4A4",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#A4A4A4",
  },
  "&:hover .MuiInput-underline:after": {
    borderBottomColor: "#A4A4A4",
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "#A4A4A4",
  },
  "&:hover .MuiInput-underline:before": {
    borderBottomColor: "#A4A4A4",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#A4A4A4",
    },
    "&:hover fieldset": {
      borderColor: "#A4A4A4",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#A4A4A4",
    },
  },
});

export default CsTextField;
