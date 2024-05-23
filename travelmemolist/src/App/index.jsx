import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { ROUTES } from "constants/routes";
import UserLayout from "layouts/Userlayout";
import Home from "pages/Home";
import FollowPage from "pages/Follow";
import CreateSchedule from "pages/CreateSchedule";
import Login from "pages/Login";
import Register from "pages/Register";

import * as S from "./style";
import { useDispatch, useSelector } from "react-redux";

import { updateUserInfo } from "../redux/slices/auth.slice";
import CompleteSchedule from "pages/CompleteSchedule";
import Support from "pages/Support";
import PersonalInfo from "pages/PersonaInfo";

function App() {
  const [isShowLoading, setIsShowLoading] = useState(true);
  const { userInfo, login } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const {
    dayActivityList,
    activity,
    updateActivityData,
    createActivity,
    deleteActivity,
    updateDayActivity,
  } = useSelector((state) => state.dayActivity);
  const { uploadMemory, memoryList } = useSelector((state) => state.memory);
  const { scheduleList, createSchedule, schedule } = useSelector(
    (state) => state.schedule
  );
  useEffect(() => {
    setIsShowLoading(
      dayActivityList.loading ||
        activity.Loading ||
        updateActivityData.loading ||
        createActivity.loading ||
        deleteActivity.loading ||
        uploadMemory.loading ||
        memoryList.loading ||
        login.loading ||
        updateDayActivity.loading ||
        scheduleList.loading ||
        createSchedule.loading ||
        schedule.loading
    );
  }, [
    dayActivityList.loading,
    activity.Loading,
    updateActivityData.loading,
    createActivity.loading,
    deleteActivity.loading,
    uploadMemory.loading,
    memoryList.loading,
    login.loading,
    updateDayActivity.loading,
    scheduleList.loading,
    createSchedule.loading,
    schedule.loading,
  ]);

  useEffect(() => {
    if (
      window.location.pathname !== "./login" &&
      window.location.pathname !== "./register"
    ) {
      const info = JSON.parse(localStorage.getItem("userInfo"));
      if (info) {
        dispatch(updateUserInfo({ data: { ...info } }));
      }
    }
  }, [userInfo.data?.userId]);
  return (
    <>
      <S.LoadingWrapper isShowLoading={isShowLoading}>
        <S.Loading className="loading">
          <S.Dot style={{ "--value": 1 }}></S.Dot>
          <S.Dot style={{ "--value": 2 }}></S.Dot>
          <S.Dot style={{ "--value": 3 }}></S.Dot>
          <S.Dot style={{ "--value": 4 }}></S.Dot>
          <S.Dot style={{ "--value": 5 }}></S.Dot>
          <S.Dot style={{ "--value": 6 }}></S.Dot>
          <S.Dot style={{ "--value": 7 }}></S.Dot>
          <S.Dot style={{ "--value": 8 }}></S.Dot>
        </S.Loading>
      </S.LoadingWrapper>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/" element={<Navigate to={ROUTES.USER.HOME} />}></Route>
          <Route path={ROUTES.USER.HOME} element={<Home />}></Route>
          <Route path={ROUTES.USER.FOLLOW} element={<FollowPage />}></Route>
          <Route path={ROUTES.USER.COMPLETE_SCHEDULE} element={<CompleteSchedule />}></Route>
          <Route path={ROUTES.USER.SUPPORT} element={<Support />}></Route>
          <Route path={ROUTES.USER.PERSONAL_INFO} element={<PersonalInfo />}></Route>
          <Route
            path={ROUTES.USER.CREATESCHEDULE}
            element={<CreateSchedule />}
          ></Route>
        </Route>
        <Route path={ROUTES.USER.LOGIN} element={<Login />}></Route>
        <Route path={ROUTES.USER.REGISTER} element={<Register />}></Route>
      </Routes>
    </>
  );
}

export default App;
