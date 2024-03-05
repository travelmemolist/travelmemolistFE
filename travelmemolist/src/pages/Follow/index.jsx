import { FaArrowLeftLong, FaPen, FaPlus, FaEllipsis } from "react-icons/fa6";
import * as S from "./style";
import { useRef, useState } from "react";

import AddActivityModal from "./components/AddActivity";
import AddMemoryModal from "./components/AddMemoryModal";

import outsideClick from "../../../src/components/outSideClick";
function FollowPage() {
  const [isShowAddActivity, setIsShowAddActivity] = useState(false);
  const [isShowAddMemory, setIsShowAddMemory] = useState(false);
  const [isShowRUDDateActivity, setIsShowRUDDateActivity] = useState(false);
  const ref = useRef(null);

  outsideClick(ref, () => setIsShowRUDDateActivity(false));
  return (
    <S.FollowWrapper>
      <AddActivityModal
        isShowAddActivity={isShowAddActivity}
        setIsShowAddActivity={setIsShowAddActivity}
      />
      <AddMemoryModal
        isShowAddMemory={isShowAddMemory}
        setIsShowAddMemory={setIsShowAddMemory}
      />
      <S.HeadingFollow>
        <FaArrowLeftLong size={30} />
        <h1>4 ngày tại Đà Nẵng</h1>
      </S.HeadingFollow>
      <S.ActivityDateList gutter={[16, 16]}>
        <S.ActivityDateItem xs={24} sm={12} md={8} lg={6}>
          <S.ActivityDateWrapper>
            <S.HeadingActivity justify={"space-between"}>
              <p>Ngày 1-Dạo Đà Nẵng</p>
              <FaPen size={10} />
            </S.HeadingActivity>
            <S.DateActivity>25 Tháng 2,2024,Thứ 2</S.DateActivity>
          </S.ActivityDateWrapper>
          <S.ActivityList gutter={[16, 16]}>
            <S.ActivitItem span={24}>
              <S.ActivityWrapper>
                <S.TitleActivity justify={"space-between"}>
                  {isShowRUDDateActivity && (
                    <S.RUDActivity ref={ref}>
                      <p>Chỉnh sửa hoạt động</p>
                      <p>xóa hoạt động</p>
                    </S.RUDActivity>
                  )}
                  <div>
                    <p>Check in cầu rồng</p>
                    <S.TimeActivity>9:00 - 10:00</S.TimeActivity>
                  </div>
                  <FaEllipsis
                    size={20}
                    onClick={() => setIsShowRUDDateActivity(true)}
                  />
                </S.TitleActivity>
                <S.AddMemory onClick={() => setIsShowAddMemory(true)}>
                  Thêm kỉ niệm
                </S.AddMemory>
              </S.ActivityWrapper>
            </S.ActivitItem>
            <S.ActivitItem span={24}>
              <S.ActivityWrapper>
                <S.TitleActivity justify={"space-between"}>
                  {isShowRUDDateActivity && (
                    <S.RUDActivity ref={ref}>
                      <p>Chỉnh sửa hoạt động</p>
                      <p>xóa hoạt động</p>
                    </S.RUDActivity>
                  )}
                  <div>
                    <p>Check in cầu rồng</p>
                    <S.TimeActivity>9:00 - 10:00</S.TimeActivity>
                  </div>
                  <FaEllipsis
                    size={20}
                    onClick={() => setIsShowRUDDateActivity(true)}
                  />
                </S.TitleActivity>
                <S.AddMemory onClick={() => setIsShowAddMemory(true)}>
                  Thêm kỉ niệm
                </S.AddMemory>
              </S.ActivityWrapper>
            </S.ActivitItem>
          </S.ActivityList>
          <S.AddActivity onClick={() => setIsShowAddActivity(true)}>
            <FaPlus size={20} />
            <p>Thêm hoạt động</p>
          </S.AddActivity>
        </S.ActivityDateItem>
        <S.ActivityDateItem xs={24} sm={12} md={8} lg={6}>
          <S.ActivityDateWrapper>
            <S.HeadingActivity justify={"space-between"}>
              <p>Ngày 2</p>
              <FaPen size={10} />
            </S.HeadingActivity>
            <S.DateActivity>26 Tháng 2,2024,Thứ 3</S.DateActivity>
          </S.ActivityDateWrapper>
          <S.AddActivity onClick={() => setIsShowAddActivity(true)}>
            <FaPlus size={20} />
            <p>Thêm hoạt động</p>
          </S.AddActivity>
        </S.ActivityDateItem>
        <S.ActivityDateItem xs={24} sm={12} md={8} lg={6}>
          <S.ActivityDateWrapper>
            <S.HeadingActivity justify={"space-between"}>
              <p>Ngày 3</p>
              <FaPen size={10} />
            </S.HeadingActivity>
            <S.DateActivity>27 Tháng 2,2024,Thứ 4</S.DateActivity>
          </S.ActivityDateWrapper>
          <S.AddActivity onClick={() => setIsShowAddActivity(true)}>
            <FaPlus size={20} />
            <p>Thêm hoạt động</p>
          </S.AddActivity>
        </S.ActivityDateItem>
        <S.ActivityDateItem xs={24} sm={12} md={8} lg={6}>
          <S.ActivityDateWrapper>
            <S.HeadingActivity justify={"space-between"}>
              <p>Ngày 4</p>
              <FaPen size={10} />
            </S.HeadingActivity>
            <S.DateActivity>28 Tháng 2,2024,Thứ 5</S.DateActivity>
          </S.ActivityDateWrapper>
          <S.AddActivity onClick={() => setIsShowAddActivity(true)}>
            <FaPlus size={20} />
            <p>Thêm hoạt động</p>
          </S.AddActivity>
        </S.ActivityDateItem>
      </S.ActivityDateList>
    </S.FollowWrapper>
  );
}

export default FollowPage;
