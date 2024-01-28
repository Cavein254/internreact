import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Gender, RegisterDetails } from "./types";

const Register = ({
  login,
  setLogin,
}: {
  login: boolean;
  setLogin: (value: boolean | false) => void;
}) => {
  const [regDetails, setRegDetails] = React.useState<RegisterDetails>({
    fName: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: Gender.FEMALE,
    dob: dayjs(Date.now()),
    phone: "",
  });
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setRegDetails({
      ...regDetails,
      [name]: value,
    });
    console.log(regDetails);
  };
  return (
    <Grid item xs={12} md={6}>
      <Box>
        <Typography
          variant="h1"
          sx={{
            fontSize: "2rem",
            fontWeight: 900,
          }}
        >
          Create Account
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 100,
          }}
        >
          Join the best internship program
        </Typography>
      </Box>
      <Box
        sx={{
          mt: "1rem",
        }}
      >
        <form onSubmit={handleFormSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mr: "1rem",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <FormControl fullWidth defaultValue="" required>
                <TextField
                  sx={{
                    mb: "1rem",
                    mr: "1rem",
                  }}
                  label="First Name"
                  variant="outlined"
                  placeholder="John"
                  type="text"
                  name="fName"
                  value={regDetails.fName}
                />
              </FormControl>
              <FormControl defaultValue="" fullWidth required>
                <TextField
                  sx={{
                    mb: "1rem",
                  }}
                  label="Last Name"
                  variant="outlined"
                  placeholder="Doe"
                  type="text"
                  name="lName"
                  value={regDetails.lName}
                />
              </FormControl>
            </Box>
            <FormControl defaultValue="" required>
              <TextField
                sx={{
                  mb: "1rem",
                }}
                label="Email"
                variant="outlined"
                placeholder="Johndoe@gmail.com"
                type="email"
                name="email"
                value={regDetails.email}
              />
            </FormControl>
            <FormControl variant="outlined" sx={{ mb: "1rem" }}>
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                name="password"
                value={regDetails.password}
              />
            </FormControl>
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Confirm Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Confirm Password"
                name="confirmPassword"
                value={regDetails.confirmPassword}
              />
            </FormControl>
            <FormControl defaultValue="" required>
              <TextField
                sx={{
                  mt: "1rem",
                  mb: "1rem",
                }}
                label="Phone Number"
                variant="outlined"
                placeholder="+254 700 000 000"
                type="text"
              />
            </FormControl>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                value={regDetails.gender}
                name="gender"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  mb: "1rem",
                }}
              >
                <FormControlLabel
                  value={regDetails.gender}
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value={regDetails.gender}
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value={regDetails.gender}
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker", "DatePicker"]}>
                <DatePicker
                  label="Date of Birth"
                  defaultValue={dayjs("2022-04-17")}
                  value={regDetails.dob}
                  name="dob"
                />
              </DemoContainer>
            </LocalizationProvider>
            <Button variant="contained" sx={{ mt: "1rem" }}>
              Create an Account
            </Button>
          </Box>
        </form>
        <Box
          sx={{
            mt: "1rem",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: "0.8rem",
            }}
          >
            {" "}
            Already have an account?
            <Button onClick={() => setLogin(!login)}>Sign In</Button>
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default Register;
