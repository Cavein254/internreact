'use client';
import { TextField, styled } from '@mui/material';

export const CustomTextField = styled(TextField)({
  fontFamily: 'Lato',
  fontWeight: 400,
  fontSize: '1.2rem',
  marginBottom: '1rem',
  width: '100%',
  '&:active': {
    border: 'black',
  },
  '&.Mui-active': {
    border: 'none',
  },
});
