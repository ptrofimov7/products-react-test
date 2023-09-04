import { Box, Typography } from '@mui/material';
import React from 'react';

const HomePage = () => {
  return (
    <Box component="section">
      <Typography
        variant="h1"
        color="#4E5AF2"
        mb="24px"
        textAlign="center"
      >
        React застосунок "Продукти"
      </Typography>
      <Typography variant="body1" lineHeight={2}>
        Розробити просту сторінку веб-додатка, що дозволяє
        користувачам переглядати та фільтрувати списки
        товарів з бази даних. Використовувати React та
        Redux для створення інтерфейсу та управління
        станом додатка. Взаємодіяти з API, щоб отримати та
        зберегти дані з бази даних.
      </Typography>
    </Box>
  );
};

export default HomePage;
