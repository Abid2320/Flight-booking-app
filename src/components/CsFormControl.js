import { FormControl, styled } from "@mui/material";

const CsFormControl = styled(FormControl)({
  width: "250px",
  "& .MuiFormLabel-root": {
    color: "#A4A4A4",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "18px",
    fontWeight: "400",
  },
  "& .MuiSelect-select": {
    color: "#A4A4A4",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "18px",
    fontWeight: "400",
  },
  "& .MuiInputBase-root:after": {
    color: "#A4A4A4",
  },
  "& .MuiInputBase-root:before": {
    borderColor: "#A4A4A4",
  },
  "&:hover .MuiInputBase-root:before": {
    borderColor: "#A4A4A4",
  },
  "& .MuiSvgIcon-root": {
    color: "#A4A4A4",
  },
  "& .MuiSelect-nativeInput": {
    color: "#A4A4A4",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "18px",
    fontWeight: "400",
  },
  "& .MuiFormHelperText-root": {
    color: "#d32f2f",
    fontSize: "15px",
    fontWeight: "400",
    fontFamily: "'Poppins', sans-serif",
  },
});

export default CsFormControl;
