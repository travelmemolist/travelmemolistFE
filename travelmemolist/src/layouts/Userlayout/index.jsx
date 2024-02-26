import Header from "./components/Header";
import Footer from "./components/Footer";
import * as S from "./style";
import { Outlet } from "react-router-dom";

function UserLayout() {
  return (
    <S.LayoutWrapper>
      <Header />
      <S.MainWrapper>
        <S.MainContainer>
          <Outlet />
        </S.MainContainer>
      </S.MainWrapper>
      <Footer />
    </S.LayoutWrapper>
  );
}

export default UserLayout;
