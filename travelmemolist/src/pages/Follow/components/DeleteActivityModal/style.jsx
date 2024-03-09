import styled from "styled-components";
export const IconDelete = styled.div`
  width: 63px;
  height: 63px;
  margin-top: 20px;
  margin: 0 auto;
`;
export const Heading = styled.h3`
  margin-top: 10px;
  text-align: center;
  font-size: 20px;
`;
export const Sub = styled.p`
  text-align: center;
  font-size: 11px;
  margin-top: 7px;
  opacity: 0.9;
`;
export const Action = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 200px;
  margin: 30px auto 0;
  gap: 20px;
`;
export const Delete = styled.button`
  text-align: center;
  font-size: 11px;
  background-color: red;
  flex: 1;
  padding: 8px 0;
  border-radius: 8px;
  color: white;

  &&:hover {
    cursor: pointer;
    opacity: 0.7;
    transition: 0.3s all;
  }
`;
export const Back = styled.button`
  text-align: center;
  font-size: 11px;
  background-color: #f5f5f5;
  color: #000;
  flex: 1;
  padding: 8px 0;
  border-radius: 8px;

  &&:hover {
    cursor: pointer;
    opacity: 0.7;
    transition: 0.3s all;
  }
`;
