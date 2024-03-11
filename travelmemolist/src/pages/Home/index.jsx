import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";
import { useEffect } from "react";

import {getScheduleListRequest} from "../../redux/slices/schedule.slice"
function Home() {

  const {userInfo} = useSelector((state)=>state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if(userInfo.data) {
      dispatch(getScheduleListRequest({userId:userInfo.data?.userId}))
    }
  }, [userInfo.data]);
  return (
    <div className="content">
      <div className="search-form">
        <input
          type="text"
          name=""
          id=""
          placeholder="search your memories..."
        />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </div>
      <div className="maincontent">
        <div className="schedules">
          <img
            className="images"
            src="https://vcdn1-dulich.vnecdn.net/2022/06/03/cauvang-1654247842-9403-1654247849.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Swd6JjpStebEzT6WARcoOA"
          />
          <div className="purpose">
            <h1>Da nang</h1>
            <p>
              Da Nang is considered an important transit point on the Central
              Heritage Road. Da Nang city is surrounded by 3 world cultural
              heritages: Hue, Hoi An, My Son. A little further is the world
              natural heritage Phong Nha - Ke Bang National Park and Paradise
              Cave.
            </p>
            <div className="more">
              <div className="date-start">
                <i
                  className="fa-regular fa-calendar-days"
                  style={{ color: "#6c62ff", paddingRight: "15px" }}
                ></i>
                <p>26/2/2024</p>
              </div>
              <div className="icon-next">
                <i className="fa-solid fa-arrow-right"></i>
              </div>
              <div className="date-end">
                <i
                  className="fa-regular fa-calendar-days"
                  style={{ color: "#6c62ff", paddingRight: "15px" }}
                ></i>
                <p>28/2/2024</p>
              </div>
              <div className="specific">
                <a href="#">
                  <p>
                    Read more <i className="fa-solid fa-plus"></i>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="schedules">
          <img
            className="images"
            src="https://vcdn1-dulich.vnecdn.net/2022/06/03/cauvang-1654247842-9403-1654247849.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Swd6JjpStebEzT6WARcoOA"
          />
          <div className="purpose">
            <h1>Da nang</h1>
            <p>
              Da Nang is considered an important transit point on the Central
              Heritage Road. Da Nang city is surrounded by 3 world cultural
              heritages: Hue, Hoi An, My Son. A little further is the world
              natural heritage Phong Nha - Ke Bang National Park and Paradise
              Cave.
            </p>
            <div className="more">
              <div className="date-start">
                <i
                  className="fa-regular fa-calendar-days"
                  style={{ color: "#6c62ff", paddingRight: "15px" }}
                ></i>
                <p>26/2/2024</p>
              </div>
              <div className="icon-next">
                <i className="fa-solid fa-arrow-right"></i>
              </div>
              <div className="date-end">
                <i
                  className="fa-regular fa-calendar-days"
                  style={{ color: "#6c62ff", paddingRight: "15px" }}
                ></i>
                <p>28/2/2024</p>
              </div>
              <div className="specific">
                <a href="#">
                  <p>
                    Read more <i className="fa-solid fa-plus"></i>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="schedules">
          <img
            className="images"
            src="https://vcdn1-dulich.vnecdn.net/2022/06/03/cauvang-1654247842-9403-1654247849.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Swd6JjpStebEzT6WARcoOA"
          />
          <div className="purpose">
            <h1>Da nang</h1>
            <p>
              Da Nang is considered an important transit point on the Central
              Heritage Road. Da Nang city is surrounded by 3 world cultural
              heritages: Hue, Hoi An, My Son. A little further is the world
              natural heritage Phong Nha - Ke Bang National Park and Paradise
              Cave.
            </p>
            <div className="more">
              <div className="date-start">
                <i
                  className="fa-regular fa-calendar-days"
                  style={{ color: "#6c62ff", paddingRight: "15px" }}
                ></i>
                <p>26/2/2024</p>
              </div>
              <div className="icon-next">
                <i className="fa-solid fa-arrow-right"></i>
              </div>
              <div className="date-end">
                <i
                  className="fa-regular fa-calendar-days"
                  style={{ color: "#6c62ff", paddingRight: "15px" }}
                ></i>
                <p>28/2/2024</p>
              </div>
              <div className="specific">
                <a href="#">
                  <p>
                    Read more <i className="fa-solid fa-plus"></i>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="schedules">
          <img
            className="images"
            src="https://vcdn1-dulich.vnecdn.net/2022/06/03/cauvang-1654247842-9403-1654247849.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Swd6JjpStebEzT6WARcoOA"
          />
          <div className="purpose">
            <h1>Da nang</h1>
            <p>
              Da Nang is considered an important transit point on the Central
              Heritage Road. Da Nang city is surrounded by 3 world cultural
              heritages: Hue, Hoi An, My Son. A little further is the world
              natural heritage Phong Nha - Ke Bang National Park and Paradise
              Cave.
            </p>
            <div className="more">
              <div className="date-start">
                <i
                  className="fa-regular fa-calendar-days"
                  style={{ color: "#6c62ff", paddingRight: "15px" }}
                ></i>
                <p>26/2/2024</p>
              </div>
              <div className="icon-next">
                <i className="fa-solid fa-arrow-right"></i>
              </div>
              <div className="date-end">
                <i
                  className="fa-regular fa-calendar-days"
                  style={{ color: "#6c62ff", paddingRight: "15px" }}
                ></i>
                <p>28/2/2024</p>
              </div>
              <div className="specific">
                <a href="#">
                  <p>
                    Read more <i className="fa-solid fa-plus"></i>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="schedules">
          <img
            className="images"
            src="https://vcdn1-dulich.vnecdn.net/2022/06/03/cauvang-1654247842-9403-1654247849.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Swd6JjpStebEzT6WARcoOA"
          />
          <div className="purpose">
            <h1>Da nang</h1>
            <p>
              Da Nang is considered an important transit point on the Central
              Heritage Road. Da Nang city is surrounded by 3 world cultural
              heritages: Hue, Hoi An, My Son. A little further is the world
              natural heritage Phong Nha - Ke Bang National Park and Paradise
              Cave.
            </p>
            <div className="more">
              <div className="date-start">
                <i
                  className="fa-regular fa-calendar-days"
                  style={{ color: "#6c62ff", paddingRight: "15px" }}
                ></i>
                <p>26/2/2024</p>
              </div>
              <div className="icon-next">
                <i className="fa-solid fa-arrow-right"></i>
              </div>
              <div className="date-end">
                <i
                  className="fa-regular fa-calendar-days"
                  style={{ color: "#6c62ff", paddingRight: "15px" }}
                ></i>
                <p>28/2/2024</p>
              </div>
              <div className="specific">
                <a href="#">
                  <p>
                    Read more <i className="fa-solid fa-plus"></i>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-num">
        <button>
          <FaChevronLeft />
        </button>
        <button>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Home;
