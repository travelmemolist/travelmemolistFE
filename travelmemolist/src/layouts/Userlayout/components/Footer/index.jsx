import "./style.css";
import { FaPlane } from "react-icons/fa6";
function Footer() {
  return (
    <div className="footer">
      <div className="describe">
        <div className="airtrav">
          <div className="title">
            <FaPlane fontSize={40} />
            <p>
              <b>Airtrav</b>
            </p>
          </div>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            quam aspernatur eaque optio repellendus rem
          </div>
        </div>
        <div className="services">
          <div>
            <p>
              <b>Services</b>
            </p>
          </div>
          <div className="son">
            <p>Trip Planner</p>
            <p>Tour Planning</p>
            <p>Tour Guide</p>
          </div>
        </div>
        <div className="support">
          <div>
            <p>
              <b>Support</b>
            </p>
          </div>
          <div className="son">
            <p>Account</p>
            <p>Legal</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="business">
          <div>
            <p>
              <b>Business</b>
            </p>
          </div>
          <div className="son">
            <p>Success</p>
            <p>About Locato</p>
            <p>Blog</p>
          </div>
        </div>
      </div>
      <div className="contact"></div>
    </div>
  );
}

export default Footer;
