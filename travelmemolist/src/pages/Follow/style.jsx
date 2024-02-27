import styled from "styled-components";
import { Row, Col } from "antd";
import { COLOR } from "constants/color";
export const FollowWrapper = styled.div`
  width: 95%;
  max-width: 1200px;
  min-height: 500px;
  margin: 0 auto;
  padding: 0 !important;
  height: auto;
`;
export const HeadingFollow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 30px;
`;
export const ActivityDateList = styled(Row)`
  width: 100%;
  box-sizing: border-box !important;
  margin-top: 20px;
`;
export const ActivityDateItem = styled(Col)`
  min-height: 100px;
`;
export const ActivityDateWrapper = styled.div`
  width: 100%;
  min-height: 70px;
  border-radius: 8px;
  box-shadow: 0 0 0 1px ${COLOR.PRIMARY_COLOR};
  background-color: #fff;
  padding: 8px 12px;
  margin-bottom: 15px;
`;
export const HeadingActivity = styled(Row)`
  width: 95%;
  max-width: 1200px;
  align-items: center;
  height: 40px;
`;
export const DateActivity = styled.p`
  opacity: 0.5;
`;
export const AddActivity = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  background-color: #dbd9f1;
  padding: 8px 12px;
  border-radius: 4px;
  color: ${COLOR.PRIMARY_COLOR};

  &:hover {
    opacity: 0.8;
    transition: 0.3 all;
  }
`;
export const ActivityList = styled(Row)`
  width: 100%;
  justify-content: center;
  margin: 0 0 15px !important;
`;
export const ActivitItem = styled(Col)`
  min-height: 100px;
  border-radius: 8px;
  box-shadow: 0 0 0 1px ${COLOR.PRIMARY_COLOR};
  background-color: #fff;
  padding: 8px 12px;
`;
export const TitleActivity = styled(Row)`
  width: 100%;
  align-items: center;
`;
export const TimeActivity = styled.p`
  opacity: 0.5;
  font-size: 12px;
  margin-left: 2px;
`;
export const AddMemory = styled.div`
  margin-top: 15px;
  max-width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  background-color: #dbd9f1;
  padding: 8px 12px;
  border-radius: 4px;
  color: ${COLOR.PRIMARY_COLOR};
  font-size: 13px;

  &:hover {
    opacity: 0.8;
    transition: 0.3 all;
  }
`;
export const ActivityWrapper = styled.div`
  width: 100%;
`;
