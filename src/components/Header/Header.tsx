import { ShoppingCart } from '@mui/icons-material';
import * as Styled from './Header.styles';
import { Box } from '@mui/material';

const Header = () => {
  return (
    <Styled.Container>
      <Styled.FlexBlock>
        <Box>
          <Styled.Anchor to="/">
            <ShoppingCart
              fontSize="large"
              sx={{ color: 'white' }}
            />
          </Styled.Anchor>
        </Box>
        <Box component="nav">
          <Styled.List>
            <Box component="li">
              <Styled.Anchor to="product">
                Продукти
              </Styled.Anchor>
            </Box>
          </Styled.List>
        </Box>
      </Styled.FlexBlock>
    </Styled.Container>
  );
};

export default Header;
