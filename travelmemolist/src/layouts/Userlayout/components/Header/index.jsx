import { Row, Col } from "antd";
import * as S from "./style";
function Header() {
  return (
    <S.HeaderWrapper>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <h1>Logo</h1>
        </Col>
        <Col span={8}>
          <ul>
            <li>HOME</li>
            <li>PROFILE</li>
            <li>PORTFOLIO</li>
            <li>BLOG</li>
          </ul>
        </Col>
        <Col span={8}>
          <h1>Avatar</h1>
        </Col>
      </Row>
    </S.HeaderWrapper>
  );
}

export default Header;
