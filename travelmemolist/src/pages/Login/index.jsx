import { COLOR } from "constants/color";
import "./style.css";
function Login() {
  return (
    <div iv class="container">
      <div class="header">
        <h1>TM</h1>
      </div>
      <div class="formlogin">
        <input type="text" name="" id="username" placeholder="username" />
        <input type="password" name="" id="password" placeholder="password" />
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
        <a href="#" class="fa fa-facebook"></a>
        <a href="#" class="fa fa-google"></a>
      </div>
    </div>
  );
}

export default Login;
