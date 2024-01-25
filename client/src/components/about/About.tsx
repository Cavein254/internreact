import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import AboutImg from '../../assets/working.jpg';
import './styles.css';
const About = () => {
  return (
    <Box component="section" id="about" className="aboutus">
      <Box>
        <Typography
          variant="h4"
          sx={{
            fontFamily: 'Roboto',
            fontWeight: '100',
            fontSize: '1.2rem',
            textAlign: 'center',
            textTransform: 'uppercase',
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
              fontFamily: 'Merriweather',
              fontSize: '1.4rem',
              fontWeight: '400',
            }}
          >
            About IC Career Agency
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: 'Poppins',
              fontWeight: '200',
            }}
          >
            A beacon of professional growth and guidance, IC is committed to
            empowering individuals in their pursuit of fulfilling careers. With
            a focus on personalized strategies, their expert team offers a range
            of services designed to unlock potential, from career assessments to
            resume enhancement. At IC, one size does not fit all. Our approach
            is rooted in understanding each individual's unique strengths and
            aspirations, ensuring that every client receives tailored advice and
            support that resonates with their journey.
          </Typography>
        </Box>
        <Box className="about-us-img-container">
          <Image
            height={300}
            width={300}
            src={AboutImg}
            alt="aboutus"
            className="about-us-img"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default About;
