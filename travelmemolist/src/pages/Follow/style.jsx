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
  border-radius: 14px;
  box-shadow: -5px 0 5px ${COLOR.BOX_SHADOW_COLOR},
    5px 0 5px ${COLOR.BOX_SHADOW_COLOR}, 0 5px 5px ${COLOR.BOX_SHADOW_COLOR};
  background-color: #fff;
  padding: 8px 12px;
  margin-bottom: 15px;

  && p {
    font-weight: 500;
    font-size: 16px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    max-width: 90%;
  }
`;
export const HeadingActivity = styled(Row)`
  width: 95%;
  max-width: 1200px;
  align-items: center;
  height: 40px;
  position: relative;
`;
export const DateActivity = styled.div`
  opacity: 0.5;
  font-size: 13px;
`;
export const AddActivity = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  background-color: #ebf1ff;
  padding: 8px 12px;
  border-radius: 4px;
  color: ${COLOR.PRIMARY_COLOR};
  box-shadow: -2px 0 2px ${COLOR.BOX_SHADOW_COLOR},
    2px 0 2px ${COLOR.BOX_SHADOW_COLOR}, 0 2px 2px ${COLOR.BOX_SHADOW_COLOR};

  &:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: 0.3 all;
  }
`;
export const ActivityList = styled(Row)`
  width: 100%;
  justify-content: center;
  margin: 0 0 15px !important;
`;
export const ActivityItem = styled(Col)`
  min-height: 100px;
  border-radius: 14px;
  box-shadow: -5px 0 5px ${COLOR.BOX_SHADOW_COLOR},
    5px 0 5px ${COLOR.BOX_SHADOW_COLOR}, 0 5px 5px ${COLOR.BOX_SHADOW_COLOR};
  background-color: #fff;
  padding: 12px 16px;
`;
export const TitleActivity = styled(Row)`
  width: 100%;
  align-items: center;
  position: relative;
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
  border-radius: 6px;
  color: ${COLOR.PRIMARY_COLOR};
  font-size: 13px;
  font-weight: 500;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: 0.3 all;
  }
`;
export const ActivityWrapper = styled.div`
  width: 100%;
`;

export const RUDActivity = styled.div`
  width: 150px;
  position: absolute;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: -5px 0 5px ${COLOR.BOX_SHADOW_COLOR},
    5px 0 5px ${COLOR.BOX_SHADOW_COLOR}, 0 5px 5px ${COLOR.BOX_SHADOW_COLOR};
  right: -120px;
  top: 30px;
  min-height: 70px;
  z-index: 1;
  text-align: center;

  && p {
    margin-top: 10px;

    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }
`;
