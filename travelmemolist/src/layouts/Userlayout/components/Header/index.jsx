import * as S from "./style";
import "./sty.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "constants/routes";

import { logout } from "../../../../redux/slices/auth.slice";
import { useDispatch, useSelector } from "react-redux";
function Header() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [userInfo.data]);
  const handleScroll = () => {
    var navbar = document.querySelector(".navbar");
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    if (scrollPosition >= "100") {
      navbar.style.boxShadow = "0 0 40px #dcdbff";
    } else {
      navbar.style.boxShadow = "none";
    }
    navbar.style.transition = "box-shadow 0.4s";
  };
  return (
    <S.HeaderWrapper>
      <div className="navbar">
        <div className="logo">
          <h1 onClick={() => navigate(ROUTES.USER.HOME)}>TM</h1>
        </div>
        <div className="item">
          <ul>
            <li onClick={() => navigate(ROUTES.USER.HOME)}>Trang chủ</li>
            <li onClick={() => navigate(ROUTES.USER.COMPLETE_SCHEDULE)}>Kỉ niệm</li>
            <li onClick={() => navigate(ROUTES.USER.SUPPORT)}>Hỗ trợ</li>
            <li onClick={() => navigate(ROUTES.USER.PERSONAL_INFO)}>Thông tin cá nhân</li>
            {userInfo?.data?.userId || userInfo?.accountInfoDTO?.userId ? (
              <li
                onClick={() => {
                  dispatch(logout({}));
                  navigate(ROUTES.USER.HOME);
                }}
              >
                logout
              </li>
            ) : (
              <li onClick={() => navigate(ROUTES.USER.LOGIN)}>login</li>
            )}
          </ul>
        </div>
      </div>
      <div className="banner">
        <div className="description">
          <h1 style={{ fontSize: "60px" }}>EXPLOR YOUR DREAMS LIFE</h1>
          <h2>TRAVELMEMORYLIST</h2>
        </div>
        <div className="img">
          <img alt="" src="https://xfar.netlify.app/assets/images/banner/1.png" />
        </div>
      </div>
    </S.HeaderWrapper>
  );
}

export default Header;
