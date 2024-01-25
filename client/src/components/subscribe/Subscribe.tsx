import { Box, Button, TextField, Typography } from '@mui/material';
import './styles.css';

const Subscribe = () => {
  return (
    <Box className="subscribe">
      <Box className="subscribe-container">
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
          Subscribe
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
          Subscribe to our NewsLetter{' '}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: 'Poppins',
            fontWeight: '200',
            textAlign: 'justify',
          }}
        >
          Are you ready to supercharge your professional journey? Don't miss out
          on exclusive insights, expert tips, and game-changing strategies
          delivered right to your inbox through the IC Newsletter!
        </Typography>
        <Box
          sx={{
            boxShadow: 2,
            marginTop: '1rem',
          }}
        >
          <TextField fullWidth label="Enter Email Address" id="fullWidth" />
        </Box>
        <Box
          sx={{
            marginTop: '0.5rem',
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#f60',
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Subscribe;
