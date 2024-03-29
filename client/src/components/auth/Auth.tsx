import { Box, Grid } from "@mui/material";

import AuthSide from "./AuthSide";
import SignIn from "./SignIn";
import React from "react";
import Register from "./Register";

const Auth = () => {
  const [login, setLogin] = React.useState<boolean>(false);
  return (
    <Box
      container-full
      padding-0
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Grid
        container
        sx={{
          mt: { xs: "1rem", md: "2rem" },
          boxShadow: 3,
          padding: { xs: "1rem", md: "4rem" },
        }}
      >
        {login ? (
          <SignIn setLogin={setLogin} login={login} />
        ) : (
          <Register setLogin={setLogin} login={login} />
        )}
        <AuthSide login={login} />
      </Grid>
    </Box>
  );
};

export default Auth;
