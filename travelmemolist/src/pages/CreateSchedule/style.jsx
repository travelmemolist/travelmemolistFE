import { Col, Row } from "antd";
import { COLOR } from "constants/color";
import styled from "styled-components";
export const CreateSchedule = styled.div`
  width: 95%;
  max-width: 1200px;
  background-color: #fff;
  padding: 16px;
  border-radius: 4px;

  && input[type="text"] {
    border-radius: 4px !important;
    border: 1px solid ${COLOR.PRIMARY_COLOR};
  }
  .ant-picker-outlined {
    border: 1px solid ${COLOR.PRIMARY_COLOR};
  }
  .ant-input {
    border: 1px solid ${COLOR.PRIMARY_COLOR};
  }
`;
export const Content = styled(Row)`
  width: 95%;
  max-width: 1200px;
`;
export const FormCreate = styled(Col)``;
export const Image = styled(Col)``;
