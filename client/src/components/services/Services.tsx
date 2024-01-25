import { Box, Typography } from '@mui/material';
import { ServiceData } from './servicedata';
import './syles.css';
const Services = () => {
  const services = ServiceData?.map((service) => {
    return (
      <Box
        className="services-wrapper"
        key={service.id}
        sx={{
          boxShadow: 1,
          borderRadius: '15px',
          width: '300px',
        }}
      >
        <Box className="services-icon-container">
          <service.icon className="services-icon" />
        </Box>
        <Box className="services-content">
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'Poppins',
              fontWeight: '900',
              fontSize: '1.2rem',
              marginTop: '0.5rem',
            }}
          >
            {service.name}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: 'Poppins',
              fontWeight: '400',
              fontSize: '1rem',
              marginTop: '0.5rem',
            }}
          >
            {service.desc}
          </Typography>
        </Box>
      </Box>
    );
  });
  return (
    <Box className="services" id="services" component="section">
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
        Our Services
      </Typography>
      <Box className="service-container">{services}</Box>
    </Box>
  );
};

export default Services;
