import { Box, Typography } from '@mui/material';
import './styles.css';
import { TestimonialData } from './testmonydata';

const Testimonials = () => {
  const testimonials = TestimonialData.map((item) => {
    return (
      <Box className="testimonial-item" key={item.id} id="testimonials">
        <Box>
          <Box className="testimonial-img-container">
            <img className="testimonial-img" alt={item.name} src={item.url} />
          </Box>
        </Box>
        <Box className="testimonial-text-container">
          <Box className="testimonial-text">
            <Typography
              variant="h5"
              sx={{
                fontFamily: 'Poppins',
                fontSize: '1rem',
                fontWeight: '400',
              }}
            >
              {item.comment}
            </Typography>
          </Box>
          <Box className="testimonial-name">
            <Typography
              variant="h5"
              sx={{
                color: 'lightgray',
                textTransform: 'uppercase',
              }}
            >
              {item.name}
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  });
  return (
    <Box component="section" id="testimonials">
      <Box>
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
            Testimonials
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'Poppins',
              fontWeight: '900',
              fontSize: '1.8rem',
              textAlign: 'center',
            }}
          >
            What Clients Say about Us
          </Typography>
        </Box>
        <Box className="testimonial-list">{testimonials}</Box>
      </Box>
    </Box>
  );
};

export default Testimonials;
