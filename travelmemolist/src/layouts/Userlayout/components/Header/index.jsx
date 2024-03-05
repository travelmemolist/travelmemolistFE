import * as S from "./style";
import "./sty.css";
import { useEffect } from "react";
function Header() {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
          <h1>TM</h1>
        </div>
        <div className="item">
          <ul>
            <li>Home</li>
            <li>Memory</li>
            <li>Support</li>
            <li>My account</li>
            <li>Logout</li>
          </ul>
        </div>
      </div>
      <div className="banner">
        <div className="description">
          <h1 style={{ fontSize: "60px" }}>EXPLOR YOUR DREAMS LIFE</h1>
          <h2>TRAVELMEMORYLIST</h2>
        </div>
        <div className="img">
          <img src="https://xfar.netlify.app/assets/images/banner/1.png" />
        </div>
      </div>
    </S.HeaderWrapper>
  );
}

export default Header;
