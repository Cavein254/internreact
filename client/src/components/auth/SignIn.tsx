import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const SignIn = ({
  login,
  setLogin,
}: {
  login: boolean;
  setLogin: (value: boolean | false) => void;
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <Grid item xs={12} md={6}>
      <Box>
        <Box>
          <Typography
            variant="h1"
            sx={{
              fontSize: "2rem",
              fontWeight: 900,
            }}
          >
            Sign In
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 100,
            }}
          >
            Glad to have you Back!
          </Typography>
        </Box>
        <form>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mr: "1rem",
              mt: "1rem",
            }}
          >
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
                      {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
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
            Do not have an account?
            <Button onClick={() => setLogin(!login)}>Create an Account</Button>
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default SignIn;
