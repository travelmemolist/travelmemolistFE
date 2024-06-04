import { COLOR } from "constants/color";
import "./style.css";
import { Button, Col, Form, Input, Row } from "antd";
import { FaFacebookF, FaGoogle } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

import { loginRequest } from "../../redux/slices/auth.slice";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "constants/routes";
import { useEffect } from "react";
function Login() {
  const [loginForm] = Form.useForm();

  const {login} = useSelector((state)=>state.auth)
  const {userInfo} = useSelector((state)=> state.auth);


  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogin = (values) => {
    dispatch(
      loginRequest({
        data: {
          ...values,
        },
        callback: () => navigate(ROUTES.USER.HOME),
      })
    );
    loginForm.resetFields();
  };

  useEffect(() => {
    if(login?.error){
      loginForm.setFields([{
        name:"username",
        errors:[login.error]
      }])
    }
  }, [login.error]);
  useEffect(() => {
    if(userInfo.data?.userId) {
      navigate(ROUTES.USER.HOME);
    }
  }, [userInfo.data?.userId]);

  return (
    <div iv className="container">
      <div className="header">
        <h1>TM</h1>
      </div>
      <Form
        className="formlogin"
        form={loginForm}
        name="loginActivity"
        layout="vertical"
        onFinish={(values) => handleLogin(values)}
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
                }
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
          <Col span={12}>
            <Form.Item name="password">
              <Button block onClick={() => navigate(ROUTES.USER.REGISTER)}>
                Register
              </Button>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="password">
              <Button block type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <div className="anotherlogin">
        <a href="#" className="a-login">
          <FaFacebookF />
        </a>
        <a href="#" className="a-login">
          <FaGoogle />
        </a>
      </div>
    </div>
  );
}

export default Login;
