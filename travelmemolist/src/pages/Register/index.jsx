import { COLOR } from "constants/color";
import "./style.css";
import { Button, Col, Form, Input, Row } from "antd";
import { FaFacebookF, FaGoogle } from "react-icons/fa6";
import { useDispatch } from "react-redux";

import { registerRequest } from "../../redux/slices/auth.slice";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "constants/routes";
function Register() {
  const [registerForm] = Form.useForm();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleRegister = (values) => {
    dispatch(
      registerRequest({
        data: {
          ...values,
        },
        callback: () => navigate(ROUTES.USER.LOGIN),
      })
    );
    registerForm.resetFields();
  };

  return (
    <div iv className="container">
      <div className="header">
        <h1>TM</h1>
      </div>
      <Form
        className="formlogin"
        form={registerForm}
        name="loginActivity"
        layout="vertical"
        onFinish={(values) => handleRegister(values)}
      >
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: "vui lòng nhập username!",
                },
                {
                  max: 40,
                  min: 6,
                  message: "Điền từ 6 -> 40 kí tự",
                },
                {
                  // pattern: "^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$",
                  message: "username không hợp lệ!",
                },
              ]}
            >
              <Input id="username" placeholder="username" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: "vui lòng nhập password!",
                },
                {
                  // pattern:
                  //   "(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$",
                  message: "mật khẩu yếu!",
                },
              ]}
            >
              <Input
                type="password"
                name=""
                id="password"
                placeholder="password"
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="confirm"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập lại mật khẩu!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("Mật khẩu không trùng khớp!")
                    );
                  },
                }),
              ]}
            >
              <Input
                type="password"
                name=""
                id="password"
                placeholder="password"
                style={{ borderStyle: "none" }}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="login">
              <Button onClick={() => navigate(ROUTES.USER.LOGIN)} block>
                Login
              </Button>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="register">
              <Button block type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <div className="anotherlogin">
        <a href="#">
          <FaFacebookF />
        </a>
        <a href="#">
          <FaGoogle />
        </a>
      </div>
    </div>
  );
}

export default Register;
