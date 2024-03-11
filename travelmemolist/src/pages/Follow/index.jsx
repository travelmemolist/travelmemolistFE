import { FaArrowLeftLong, FaPen, FaPlus, FaEllipsis } from "react-icons/fa6";
import * as S from "./style";
import { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AddActivityModal from "./components/AddActivity";
import AddMemoryModal from "./components/AddMemoryModal";
import outsideClick from "../../../src/components/outSideClick";
import DeleteActivityModal from "./components/DeleteActivityModal";
import UpdateDayActivity from "./components/UpdateDayActivity";

import {
  getActivityRequest,
  getDayActivityListRequest,
} from "../../redux/slices/dayActivity.slice";

import dayjs from "dayjs";
import "dayjs/locale/vi";
import UpdateActivity from "./components/UpdateActivity";

import duration from "dayjs/plugin/duration";
import moment from "moment";

import { getMemoryRequest } from "../../redux/slices/memory.slice";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "constants/routes";

dayjs.extend(duration);
function FollowPage() {
  var relativeTime = require("dayjs/plugin/relativeTime");
  dayjs.extend(relativeTime);
  dayjs.locale("vi");
  const [isShowAddActivity, setIsShowAddActivity] = useState(false);
  const [isShowAddMemory, setIsShowAddMemory] = useState(false);
  const [isShowUpdateActivity, setIsShowUpdateActivity] = useState(false);
  const [isShowDeleteActivity, setIsShowDeleteActivity] = useState(false);
  const [isShowUpdateDayActivity, setIsShowUpdateDayActivity] = useState(false);

  const [indexDayActivity, setIndexDayActivity] = useState(null);
  const [indexActivity, setIndexActivity] = useState(null);
  const [idUpdate, setIdUpdate] = useState(null);

  const [dayActivity, setDayActivity] = useState({});

  const { dayActivityList } = useSelector((state) => state.dayActivity);
  const { userInfo } = useSelector((state) => state.auth);

  const ref = useRef(null);
  outsideClick(ref, () => {
    setIndexDayActivity(null);
    setIndexActivity(null);
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const params = useParams();

  useEffect(() => {
    dispatch(getDayActivityListRequest());
  }, []);
  useEffect(() => {
    if (!userInfo.data?.userId) {
      navigate(ROUTES.USER.LOGIN);
    } else {
      navigate(ROUTES.USER.FOLLOW);
    }
  }, [userInfo.data?.userId]);
  const renderDayActivityList = useMemo(() => {
    return dayActivityList?.data?.map((item, index) => {
      return (
        <S.ActivityDateItem key={index} xs={24} sm={12} md={8} lg={6}>
          <S.ActivityDateWrapper>
            <S.HeadingActivity justify={"space-between"}>
              <p>
                {item?.day}
                {item?.name?.length > 0 && <span> - {item.name}</span>}
              </p>
              <FaPen
                size={10}
                onClick={() => {
                  setDayActivity(item);
                  setIsShowUpdateDayActivity(true);
                }}
              />
            </S.HeadingActivity>
            <S.DateActivity>
              {dayjs(item.currentDay).format("DD/MM/YYYY, dddd")}
            </S.DateActivity>
          </S.ActivityDateWrapper>
          {item?.activities?.length != 0 && (
            <S.ActivityList gutter={[16, 16]}>
              {item.activities?.map((activity, activityIndex) => {
                return (
                  <S.ActivityItem span={24} key={activityIndex}>
                    <S.ActivityWrapper>
                      <S.TitleActivity justify={"space-between"}>
                        {indexActivity == activityIndex &&
                          indexDayActivity === index && (
                            <S.RUDActivity ref={ref}>
                              <p
                                onClick={() => {
                                  setIsShowUpdateActivity(true);
                                  setIdUpdate(activity.id);
                                  dispatch(
                                    getActivityRequest({
                                      activityId: activity.id,
                                    })
                                  );
                                }}
                              >
                                Chỉnh sửa hoạt động
                              </p>
                              <p
                                onClick={() => {
                                  setIsShowDeleteActivity(true);
                                  setIndexActivity(activity.id);
                                }}
                              >
                                xóa hoạt động
                              </p>
                            </S.RUDActivity>
                          )}
                        <div>
                          <p>{activity.name}</p>
                          <S.TimeActivity>
                            {moment(
                              moment(activity.startTime).valueOf()
                            ).format("HH:mm")}
                            -
                            {moment(moment(activity.endTime).valueOf()).format(
                              "HH:mm"
                            )}
                          </S.TimeActivity>
                        </div>
                        <FaEllipsis
                          size={20}
                          onClick={() => {
                            setIndexActivity(activityIndex);
                            setIndexDayActivity(index);
                          }}
                        />
                      </S.TitleActivity>
                      <S.AddMemory
                        onClick={() => {
                          setIsShowAddMemory(true);
                          setIndexActivity(activity.id);
                          dispatch(
                            getMemoryRequest({
                              activityId: activity.id,
                              limit: 3,
                              page: 1,
                            })
                          );
                        }}
                      >
                        Thêm kỉ niệm
                      </S.AddMemory>
                    </S.ActivityWrapper>
                  </S.ActivityItem>
                );
              })}
            </S.ActivityList>
          )}
          <S.AddActivity
            onClick={() => {
              setIsShowAddActivity(true);
              setIndexDayActivity(index + 1);
            }}
          >
            <FaPlus size={20} />
            <p>Thêm hoạt động</p>
          </S.AddActivity>
        </S.ActivityDateItem>
      );
    });
  }, [
    dayActivityList.data,
    indexActivity,
    indexDayActivity,
    setIsShowAddMemory,
    setIsShowAddActivity,
  ]);
  return (
    <S.FollowWrapper>
      <AddActivityModal
        isShowAddActivity={isShowAddActivity}
        setIsShowAddActivity={setIsShowAddActivity}
        indexDayActivity={indexDayActivity}
      />
      <AddMemoryModal
        isShowAddMemory={isShowAddMemory}
        setIsShowAddMemory={setIsShowAddMemory}
        activityId={indexActivity}
      />
      <UpdateActivity
        isShowUpdateActivity={isShowUpdateActivity}
        setIsShowUpdateActivity={setIsShowUpdateActivity}
        activityId={idUpdate}
      />
      <DeleteActivityModal
        isShowDeleteActivity={isShowDeleteActivity}
        setIsShowDeleteActivity={setIsShowDeleteActivity}
        activityId={indexActivity}
      />
      <UpdateDayActivity
        isShowUpdateDayActivity={isShowUpdateDayActivity}
        setIsShowUpdateDayActivity={setIsShowUpdateDayActivity}
        dayActivity={dayActivity}
        setDayActivity={setDayActivity}
      />
      <S.HeadingFollow>
        <FaArrowLeftLong size={30} />
        <h1> {dayActivityList?.data?.length} ngày tại Đà Nẵng</h1>
      </S.HeadingFollow>

      <S.ActivityDateList gutter={[16, 16]}>
        {renderDayActivityList}
      </S.ActivityDateList>
    </S.FollowWrapper>
  );
}

export default FollowPage;
