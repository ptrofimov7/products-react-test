import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

export const Container = styled('header')(
  ({ theme }) => ({
    position: 'fixed',
    top: 0,
    zIndex: 100,
    left: 0,
    right: 0,
    maxWidth: 'inherit',
    height: '92px',
    color: 'red',
    backgroundColor: theme.palette.primary.main,
    boxShadow: '0 5px 10px rgba(37,40,41,.3)',
    transition: 'all .5s',
    margin: 'auto',
    paddingInline: '60px',
  })
);

export const FlexBlock = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '60px',
  height: '100%',
}));

export const Anchor = styled(Link)(({ theme }) => ({
  color: '#fff',
  textDecoration: 'none',
  display: 'inline-block',
  padding: '5px',
  transition: 'all ease 3s',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

export const List = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  padding: 0,
}));
