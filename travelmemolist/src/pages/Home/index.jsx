import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useEffect, useMemo, useState } from "react";
import { getScheduleListRequest } from "../../redux/slices/schedule.slice";
import dayjs from "dayjs";
import { generatePath, useNavigate } from "react-router-dom";
import { ROUTES } from "constants/routes";
import { Button } from "antd";
function Home() {
  const { userInfo } = useSelector((state) => state.auth);

  const { scheduleList } = useSelector((state) => state.schedule);
  const [key, setKey] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();
  useEffect(() => {
    if (userInfo.data?.userId) {
      dispatch(getScheduleListRequest({ userId: userInfo.data?.userId }));
    }
  }, [userInfo.data?.userId]);

  const handleNextPage = () => {
    dispatch(
      getScheduleListRequest({
        userId: userInfo.data?.userId,
        page: parseInt(scheduleList.data.number) + 1,
      })
    );
  };
  const handlePrePage = () => {
    dispatch(
      getScheduleListRequest({
        userId: userInfo.data?.userId,
        page: parseInt(scheduleList.data.number) - 1,
      })
    );
  };
  const handleNavigateCreateSchedule = () => {
    navigate(ROUTES.USER.CREATESCHEDULE);
  };
  const renderScheduleList = useMemo(() => {
    if (scheduleList?.data?.content && userInfo.data?.userId) {
      return scheduleList?.data?.content?.map((item, index) => {
        return (
          <div key={index} className="schedules">
            <img
              alt=""
              className="images"
              src="https://vcdn1-dulich.vnecdn.net/2022/06/03/cauvang-1654247842-9403-1654247849.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Swd6JjpStebEzT6WARcoOA"
            />
            <div className="purpose">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <div className="more">
                <div className="date-start">
                  <i
                    className="fa-regular fa-calendar-days"
                    style={{ color: "#6c62ff", paddingRight: "15px" }}
                  ></i>
                  <p>{dayjs(item.startDay).format("DD/MM/YYYY")}</p>
                </div>
                <div className="icon-next">
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
                <div className="date-end">
                  <i
                    className="fa-regular fa-calendar-days"
                    style={{ color: "#6c62ff", paddingRight: "15px" }}
                  ></i>
                  <p> {dayjs(item.endDay).format("DD/MM/YYYY")}</p>
                </div>
                <div className="specific">
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      navigate(
                        generatePath(ROUTES.USER.FOLLOW, {
                          id: item?.schedulesId,

                        }, { title: item?.title })
                      );
                    }}
                  >
                    <p>
                      Theo dõi <i className="fa-solid fa-plus"></i>
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      });
    } else {
      return (
        <div className="maincontent">
          <div className="schedules">
            <img
              alt=""
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
              alt=""
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
              alt=""
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
            alt=""
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
            alt=""
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
      );
    }
  }, [scheduleList?.data?.content, userInfo?.data?.userId]);
  return (
    <div className="content">
      <div className="search-form">
        <input
          type="text"
          name=""
          id=""
          placeholder="search your memories..."
          onChange={(e) => {
            dispatch(
              getScheduleListRequest({
                userId: userInfo?.data?.userId,
                title: e.target.value,
              })
            );
          }}
        />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          height: "40px",
        }}
      >
        <Button
          type="primary"
          style={{ maxWidth: "500px", fontSize: "17px" }}
          onClick={() => handleNavigateCreateSchedule()}
        >
          Thêm mới lịch trình
        </Button>
      </div>

      {/* {scheduleList?.data.content?.length && (
        <div className="maincontent">{renderScheduleList}</div>
      )}
      {!scheduleList?.data.content && (
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
      )} */}
      {renderScheduleList}
      <div className="page-num">
        {scheduleList?.data.first === false && (
          <button
            style={{ cursor: "pointer" }}
            onClick={() => {
              handlePrePage();
            }}
          >
            <FaChevronLeft />
          </button>
        )}
        {scheduleList?.data.last === false && (
          <button
            style={{ cursor: "pointer" }}
            onClick={() => {
              handleNextPage();
            }}
          >
            <FaChevronRight />
          </button>
        )}
      </div>
    </div>
  );
}

export default Home;
