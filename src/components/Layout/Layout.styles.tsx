import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const Container = styled(Box)(({ theme }) => ({
  margin: 'auto',
  maxWidth: '1500px',
  paddingInline: '20px',
}));

export const Main = styled('main')(({ theme }) => ({
  marginBlock: '140px 100px',
}));
