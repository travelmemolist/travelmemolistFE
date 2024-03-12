import { Button, Col, Row } from "antd";
import { COLOR } from "constants/color";
import styled from "styled-components";
export const Heading = styled.h1`
  width: 100%;
  text-align: center;
`;
export const MemoryWrapper = styled.div``;
export const ImageList = styled(Row)``;
export const ImageItem = styled(Col)`
  max-height: 350px;
  position: relative;
  height: 300px;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;
export const Xmark = styled.div`
  position: absolute;
  right: 8px;
  top: 0px;
  cursor: pointer;
`;
export const UploadImageWrapper = styled(Row)`
  margin-top: 20px;
  width: 50%;
  min-width: 400px;
  align-items: center;
  justify-content: center;
  & input {
    display: none;
  }
`;
export const ImageUpload = styled(Col)``;
export const UploadFile = styled(Col)``;
export const ChooseImageWrapper = styled(Col)`
  && > p {
    font-style: italic;
    width: 100%;
    @media screen and (max-width: 355px) {
      display: none;
    }
  }
`;
export const ChooseImage = styled.div`
  width: 100px;
  padding: 8px 12px;
  background-color: ${COLOR.PRIMARY_COLOR};
  color: #fff;
  border-radius: 8px;
  margin-top: 15px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: all 0.3;
  }
`;
export const ShowMore = styled(Button)`
  margin-top: 20px;
  width: 200px;
  max-width: 100%;
  margin: 0 auto;
`;
