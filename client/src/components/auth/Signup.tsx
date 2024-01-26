import {
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  IconButton,
  Input,
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
import Carousel from "../carousel/Carousel";

const Signup = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <Box
      sx={{
        height: "100vh",
      }}
    >
      <Grid
        container
        sx={{
          mt: "2rem",
          p: "1rem",
        }}
      >
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
            <form>
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
                          {showPassword ? (
                            <MdVisibilityOff />
                          ) : (
                            <MdVisibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
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
                          {showPassword ? (
                            <MdVisibilityOff />
                          ) : (
                            <MdVisibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Confirm Password"
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
                  <FormLabel id="demo-radio-buttons-group-label">
                    Gender
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      mb: "1rem",
                    }}
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
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
                    />
                  </DemoContainer>
                </LocalizationProvider>
                <Button variant="contained" sx={{ mt: "1rem" }}>
                  Create an Account
                </Button>
              </Box>
            </form>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: { xs: "hidden", md: "block" },
            visibility: { xs: "hidden", md: "visible" },
            backgroundColor: "#eceff4",
            borderRadius: "15px",
          }}
        >
          <Box
            sx={{
              m: "1rem",
            }}
          >
            <Box
              sx={{
                p: "1rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: "1.4rem",
                  }}
                >
                  The best way to boost your productivity
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "1rem",
                  }}
                >
                  Enhance your skills with our services
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "block",
                }}
              >
                <Carousel />
              </Box>
              <Box>
                <Typography variant="h6">
                  Elevate your career journey with us – where meaningful
                  connections and professional growth converge. Join today and
                  pave the way for a brighter, more fulfilling future!
                </Typography>
              </Box>
            </Box>
            <Box>The Intern</Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Signup;
