import palette from './palette';

const typography = {
  fontFamily: 'Roboto, sans-serif',

  h1: {
    fontSize: '36px',
    fontWeight: 700,
    lineHeight: '44px',
    letterSpacing: '0.02em',
  },

  h2: {
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '24px',
    color: palette.secondary.main,
  },

  h3: {
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '21.5px',
    color: palette.secondary.main,
  },

  body1: {
    fontWeight: 400,
    fontSize: 18,
    lineHeight: '24px',
    letterSpacing: '0em',
  },
};

export default typography;
