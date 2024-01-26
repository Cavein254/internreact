import { Box, Grid } from "@mui/material";

import Register from "./Register";
import AuthSide from "./AuthSide";
import SignIn from "./SignIn";

const Auth = () => {
  return (
    <Box
      container-full
      padding-0
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        sx={{
          mt: { xs: "1rem", md: "2rem" },
          boxShadow: 3,
          padding: { xs: "1rem", md: "4rem" },
        }}
        xs={12}
      >
        <SignIn />
        <AuthSide />
      </Grid>
    </Box>
  );
};

export default Auth;
