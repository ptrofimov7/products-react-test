import { ShoppingCart } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';

const ErrorPage = () => {
  return (
    <Box component="section">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        bgcolor="blueviolet"
        color="white"
        gap="40px"
      >
        <Box>
          <ShoppingCart sx={{ fontSize: 200 }} />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          gap="24px"
        >
          <Typography variant="h2" color="#fff">
            Упс! Щось пішло не так!
          </Typography>
          <Typography variant="body1">
            На сторінці виникла помилка
          </Typography>
          <Typography variant="body1">
            Спробуйте перейти на домашню страницю
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => window.location.href ='/'}
          >
            Перейти
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ErrorPage;
