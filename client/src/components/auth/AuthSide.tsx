import { Box, Grid, Typography } from "@mui/material";
import Carousel from "../carousel/Carousel";

const AuthSide = ({ login }: { login: boolean }) => {
  return (
    <Grid
      item
      xs={6}
      sx={{
        display: { xs: "none", md: "block" },
        backgroundColor: "#eceff4",
        borderRadius: "15px",
        position: "relative",
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
            {login ? (
              <Typography
                variant="h2"
                sx={{
                  fontSize: "1.4rem",
                }}
              >
                Continue your Journey to achieving greater heights
              </Typography>
            ) : (
              <Typography
                variant="h2"
                sx={{
                  fontSize: "1.4rem",
                }}
              >
                The best way to boost your productivity
              </Typography>
            )}
            {login ? (
              <Typography
                variant="h5"
                sx={{
                  fontSize: "1rem",
                }}
              >
                View our list of the best currated internship opportunities
              </Typography>
            ) : (
              <Typography
                variant="h5"
                sx={{
                  fontSize: "1rem",
                }}
              >
                Enhance your skills with our services
              </Typography>
            )}
          </Box>
          <Box
            sx={{
              display: "block",
              mt: "1rem",
            }}
          >
            <Carousel />
          </Box>
          <Box>
            {login ? (
              <Typography
                variant="h6"
                sx={{
                  fontSize: "0.8rem",
                }}
              >
                Unlock your potential with our innovative platform! We
                specialize in seamlessly connecting ambitious interns with
                top-tier companies and potential employers. Our user-friendly
                interface streamlines the internship search, offering a vast
                network of opportunities tailored to your skills and aspirations
              </Typography>
            ) : (
              <Typography
                variant="h6"
                sx={{
                  fontSize: "0.8rem",
                }}
              >
                Elevate your career journey with us – where meaningful
                connections and professional growth converge. Join today and
                pave the way for a brighter, more fulfilling future!
              </Typography>
            )}
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            display: "flex",
            justifyContent: "right",
            width: "100%",
          }}
        >
          <Box sx={{}}>
            <Typography
              variant="h4"
              sx={{
                color: "#f59f00",
              }}
            >
              THE INTERN
            </Typography>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default AuthSide;
