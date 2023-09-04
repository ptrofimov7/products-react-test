import { Outlet } from 'react-router-dom';
import Header from '../Header';
import * as Styled from './Layout.styles';

const Layout = () => {
  return (
    <Styled.Container>
      <Header />
      <Styled.Main>
        <Outlet />
      </Styled.Main>
    </Styled.Container>
  );
};

export default Layout;
