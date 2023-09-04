import { Typography } from '@mui/material';
import { styled } from '@mui/system';

export const CustomHeading = styled(Typography)(
   ({ theme }) => ({
      marginBlock: '20px',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      textAlign: 'center',
      textShadow: '1px 1px 1px 0px',
      fontWeight: '700',
      color: `${theme.palette.primary.main}`,
   })
);
