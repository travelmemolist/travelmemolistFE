import { COLOR } from "constants/color";
import "./style.css";
import { FaFacebookF, FaGoogle } from "react-icons/fa6";
function Register() {
  return (
    <div iv class="container">
      <div class="header">
        <h1>TM</h1>
      </div>
      <div class="formlogin">
        <input type="text" name="" id="username" placeholder="username" />
        <input type="password" name="" id="password" placeholder="password" />
        <input
          type="password"
          name=""
          id="password"
          placeholder="Enter the password"
        />
        <input
          style={{
            backgroundColor: ` ${COLOR.PRIMARY_COLOR}`,
            color: "white",
            marginTop: "32px",
          }}
          type="button"
          name=""
          id="button"
          value="login"
        />
      </div>
      <div class="anotherlogin">
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
