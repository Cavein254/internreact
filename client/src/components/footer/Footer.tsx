import { Box } from '@mui/material';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box> &copy; {year} IC Career Agency. All rights reserved.</Box>
    </Box>
  );
};

export default Footer;
