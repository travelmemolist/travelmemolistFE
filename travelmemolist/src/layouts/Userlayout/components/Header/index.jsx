import { Row, Col } from "antd";
import * as S from "./style";
function Header() {
  return (
    <S.HeaderWrapper>
      <Row style={{ width: "100%" }} gutter={[16, 16]}>
        <Col span={8}>
          <h1>Logo</h1>
        </Col>
        <Col span={8}>
          <S.Menu>
            <li>HOME</li>
            <li>PROFILE</li>
            <li>PORTFOLIO</li>
            <li>BLOG</li>
          </S.Menu>
        </Col>
        <Col span={8}>
          <h1>Avatar</h1>
        </Col>
      </Row>
    </S.HeaderWrapper>
  );
}

export default Header;
