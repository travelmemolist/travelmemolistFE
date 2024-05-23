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
          <div style={{ listStyle: "none" }}>
            <li> Phạm Nguyễn Trường Tín </li>
            <li> Võ Nguyễn Phát </li>
            <li>Trần Hữu Hùng</li>
            <li>Thái Mai Quang</li>
            <li>Nguyễn Bảo Lưu</li>
          </div>
        </div>
        <div className="services">
          <div>
            <p>
              <b>Dịch vụ</b>
            </p>
          </div>
          <div className="son">
            <p>Du lịch</p>
            <p>Lịch trình</p>
          </div>
        </div>
        <div className="support">
          <div>
            <p>
              <b>Hỗ trợ</b>
            </p>
          </div>
          <div className="son">
            <p>Tài khoản</p>
            <p>Hợp đồng</p>
            <p>Liên hệ</p>
          </div>
        </div>
        <div className="business">
          <div>
            <p>
              <b>Nghiệp vụ</b>
            </p>
          </div>
          <div className="son">
            <p>Quảng cáo</p>
            <p>Blog</p>
          </div>
        </div>
      </div>
      <div className="contact"></div>
    </div>
  );
}

export default Footer;
