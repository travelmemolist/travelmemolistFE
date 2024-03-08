import { FaArrowLeftLong, FaPen, FaPlus, FaEllipsis } from "react-icons/fa6";
import * as S from "./style";
import { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AddActivityModal from "./components/AddActivity";
import AddMemoryModal from "./components/AddMemoryModal";
import outsideClick from "../../../src/components/outSideClick";

import {
  getActivityRequest,
  getDayActivityListRequest,
} from "../../redux/slices/dayActivity.slice";

import dayjs from "dayjs";
import "dayjs/locale/vi";
import UpdateActivity from "./components/UpdateActivity";

import duration from "dayjs/plugin/duration";
import moment from "moment";

dayjs.extend(duration);
function FollowPage() {
  var relativeTime = require("dayjs/plugin/relativeTime");
  dayjs.extend(relativeTime);
  dayjs.locale("vi");
  const [isShowAddActivity, setIsShowAddActivity] = useState(false);
  const [isShowAddMemory, setIsShowAddMemory] = useState(false);
  const [isShowUpdateActivity, setIsShowUpdateActivity] = useState(false);
  const [indexDayActivity, setIndexDayActivity] = useState(null);
  const [indexActivity, setIndexActivity] = useState(null);
  const [idUpdate, setIdUpdate] = useState(null);

  const { dayActivityList } = useSelector((state) => state.dayActivity);

  const ref = useRef(null);
  outsideClick(ref, () => {
    setIndexDayActivity(null);
    setIndexActivity(null);
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDayActivityListRequest());
  }, []);

  const renderDayActivityList = useMemo(() => {
    return dayActivityList.data.map((item, index) => {
      return (
        <S.ActivityDateItem key={index} xs={24} sm={12} md={8} lg={6}>
          <S.ActivityDateWrapper>
            <S.HeadingActivity justify={"space-between"}>
              <p>Ngày {item?.day}</p>
              <FaPen size={10} />
            </S.HeadingActivity>
            <S.DateActivity>
              {dayjs(item.currentDay, "DD/MM/YYYY").format("DD/MM/YYYY")},
              {dayjs(item.currentDay, "DD/MM/YYYY").format("dddd")}
            </S.DateActivity>
          </S.ActivityDateWrapper>
          {item.activities.length != 0 && (
            <S.ActivityList gutter={[16, 16]}>
              {item.activities.map((activity, activityIndex) => {
                return (
                  <S.ActivitItem span={24} key={activityIndex}>
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
                              <p>xóa hoạt động</p>
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
                      <S.AddMemory onClick={() => setIsShowAddMemory(true)}>
                        Thêm kỉ niệm
                      </S.AddMemory>
                    </S.ActivityWrapper>
                  </S.ActivitItem>
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
      />
      <UpdateActivity
        isShowUpdateActivity={isShowUpdateActivity}
        setIsShowUpdateActivity={setIsShowUpdateActivity}
        activityId={idUpdate}
      />
      <S.HeadingFollow>
        <FaArrowLeftLong size={30} />
        <h1> {dayActivityList.data.length} ngày tại Đà Nẵng</h1>
      </S.HeadingFollow>

      <S.ActivityDateList gutter={[16, 16]}>
        {renderDayActivityList}
      </S.ActivityDateList>
    </S.FollowWrapper>
  );
}

export default FollowPage;
