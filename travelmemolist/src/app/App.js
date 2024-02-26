import { Route, Routes, Navigate } from "react-router-dom";
import { ROUTES } from "constants/routes";
import UserLayout from "layouts/Userlayout";
import Home from "pages/Home";
import FollowPage from "pages/Follow";
function App() {
  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route path="/" element={<Navigate to={ROUTES.USER.HOME} />}></Route>
        <Route path={ROUTES.USER.HOME} element={<Home />}></Route>
        <Route path={ROUTES.USER.FOLLOW} element={<FollowPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
