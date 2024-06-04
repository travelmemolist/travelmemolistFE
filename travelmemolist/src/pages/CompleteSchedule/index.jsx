/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { getScheduleListCompleteRequest } from "../../redux/slices/schedule.slice";
import dayjs from "dayjs";
import { generatePath ,useNavigate} from 'react-router-dom';
import { ROUTES } from 'constants/routes';
export default function CompleteSchedule() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);
  const { scheduleListComplete } = useSelector((state) => state.schedule);


  useEffect(() => {
    if (userInfo.data?.userId) {
      dispatch(getScheduleListCompleteRequest({ userId: userInfo.data?.userId }));
    }
  }, [userInfo.data?.userId]);

  const renderScheduleList = useMemo(() => {
    if (scheduleListComplete?.data?.content && userInfo.data?.userId){
      return scheduleListComplete?.data?.content?.map((item, index) => {
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
                    onClick={()=>{
                      navigate(generatePath(ROUTES.USER.VIEW_IMAGE_SCHEDULE,{
                        id: item?.schedulesId,
                      }))
                    }}
                    >
                    <p>
                      Xem kỉ niệm <i className="fa-solid fa-plus"></i>
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })
    }
    else {
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
        </div>
      );
    }
  },[scheduleListComplete?.data?.content, userInfo?.data?.userId]);
  return (
    <>
    {renderScheduleList}</>
  )
}
