import {
  Button,
  Col,
  Input,
  Modal,
  Row,
  Form,
  TimePicker,
  notification,
} from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import { updateDayActivityRequest } from "../../../../redux/slices/dayActivity.slice";

function UpdateDayActivity({
  isShowUpdateDayActivity,
  setIsShowUpdateDayActivity,
  dayActivity,
  setDayActivity,
}) {
  const dispatch = useDispatch();

  const handleUpdateDayActivity = (values) => {};

  const handleOnChange = (e) => {
    setDayActivity({
      id: dayActivity.id,
      name: e.target.value,
    });
  };
  return (
    <Modal
      title="Chỉnh sửa ngày "
      open={isShowUpdateDayActivity}
      onCancel={() => setIsShowUpdateDayActivity(false)}
      footer={null}
      width={700}
    >
      <Input
        onChange={(e) => handleOnChange(e)}
        placeholder="Nhập tiêu đề"
        value={dayActivity.name}
      />
    </Modal>
  );
}

export default UpdateDayActivity;
