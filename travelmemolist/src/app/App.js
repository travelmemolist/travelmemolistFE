import { Route, Routes, Navigate } from "react-router-dom";
import { ROUTES } from "constants/routes";
import UserLayout from "layouts/Userlayout";
import Home from "pages/Home";
import FollowPage from "pages/Follow";
import CreateSchedule from "pages/CreateSchedule";
import Login from "pages/Login";
import Register from "pages/Register";
function App() {
  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route path="/" element={<Navigate to={ROUTES.USER.HOME} />}></Route>
        <Route path={ROUTES.USER.HOME} element={<Home />}></Route>
        <Route path={ROUTES.USER.FOLLOW} element={<FollowPage />}></Route>
        <Route
          path={ROUTES.USER.CREATESCHEDULE}
          element={<CreateSchedule />}
        ></Route>
      </Route>
      <Route path={ROUTES.USER.LOGIN} element={<Login />}></Route>
      <Route path={ROUTES.USER.REGISTER} element={<Register />}></Route>
    </Routes>
  );
}

export default App;
