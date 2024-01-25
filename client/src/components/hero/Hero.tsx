import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import "./style.css";
import HeroPic from "../../assets/hero.jpg";

const Hero = () => {
  return (
    <Box className="hero-container" component="section" id="hero">
      <Box className="hero-text">
        <Box>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Merriweather",
              fontSize: "3rem",
              lineHeight: "0.85",
              fontWeight: "400",
            }}
          >
            Empower Your Career Journey with{" "}
            <span className="gpol">INTERN CONNECT</span>
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Dancing Script",
              fontSize: "2rem",
            }}
          >
            Your Success, Our Priority.
          </Typography>
        </Box>
        <Box>
          <a href="#services">
            <Button
              variant="contained"
              sx={{
                fontFamily: "Poppins",
                backgroundColor: "#f60",
                fontSize: "1.2rem",
                borderRadius: 0,
              }}
            >
              Discover Our Services
            </Button>
          </a>
        </Box>
      </Box>
      <Box className="hero-img-container">
        <img src={HeroPic} alt="Hero" className="hero-img" />
      </Box>
    </Box>
  );
};

export default Hero;
