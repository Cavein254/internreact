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
import React, { useContext } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../context/userContext";
import { Form } from "react-router-dom";
import { saveUser } from "../../utils/user";

const SignIn = ({
  login,
  setLogin,
}: {
  login: boolean;
  setLogin: (value: boolean | false) => void;
}) => {
  const { setUser, user } = useContext(UserContext);
  const [signUp, setsignUp] = React.useState({
    email: "",
    password: "",
  });
  const [error, setError] = React.useState("");
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleInputChange = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target as HTMLInputElement;
    setsignUp({
      ...signUp,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setError("");
    console.log(signUp);
    const { email, password } = signUp;
    if (email.length === 0 || password.length === 0) {
      setError("Email and password cannot be empty");
      return;
    }
    const handleOnChange = (email: string) => {
      //eslint-disable-next-line
      const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!re.test(email)) {
        setError("Invalid Email");
        return;
      } else {
        return email;
      }
    };
    handleOnChange(email);
    if (error === "") {
      axios
        .post("/api/profile/login", { email, password })
        .then((res) => {
          const { status, payload } = res.data;
          if (status !== 200) {
            setError(payload);
            return;
          }
          setUser(payload);
          saveUser(payload);
          navigate("/dashboard");
        })
        .catch((e) => {
          setError("Unable to connect to server");
        });
    }
  };
  return (
    <Grid item xs={12} md={6}>
      {error && (
        <Typography
          variant="h6"
          sx={{
            color: "red",
            fontSize: "0.8rem",
          }}
        >
          {error}
        </Typography>
      )}
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
        <Box>
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
                name="email"
                value={signUp.email}
                onChange={handleInputChange}
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
                value={signUp.password}
                onChange={handleInputChange}
              />
            </FormControl>
            <Button
              variant="contained"
              sx={{ mt: "1rem" }}
              onClick={handleFormSubmit}
            >
              Sign In
            </Button>
          </Box>
        </Box>
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
