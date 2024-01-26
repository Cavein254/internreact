import { Box, Typography } from "@mui/material";
import AboutImg from "../../assets/working.jpg";
import "./styles.css";
const About = () => {
  return (
    <Box component="section" id="about" className="aboutus">
      <Box>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Roboto",
            fontWeight: "100",
            fontSize: "1.2rem",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          About Us
        </Typography>
      </Box>
      <Box className="about-us-content">
        <Box className="about-us-text">
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Merriweather",
              fontSize: "1.4rem",
              fontWeight: "400",
            }}
          >
            About The Intern
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Poppins",
              fontWeight: "200",
            }}
          >
            WHY the intern For the intern/graduate Access to internship
            opportunities Work experience through training on the job An
            opportunity to experience work in different industries Develop
            skills that bridge the gap between employability and quality
            education An opportunity for employment on successful completion of
            the internship
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Poppins",
              fontWeight: "200",
            }}
          >
            For the organisation/company Easy access to vetted professional
            Opportunity to offer short term work contracts to be done either
            remotely or in your office premises Opportunity to replace the
            intern on valid dismisal grounds
          </Typography>
        </Box>
        <Box className="about-us-img-container">
          <img
            src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="aboutus"
            className="about-us-img"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default About;
