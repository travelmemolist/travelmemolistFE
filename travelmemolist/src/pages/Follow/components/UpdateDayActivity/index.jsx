import { Button, Col, Input, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { updateDayActivityRequest } from "../../../../redux/slices/dayActivity.slice";

function UpdateDayActivity({
  isShowUpdateDayActivity,
  setIsShowUpdateDayActivity,
  dayActivity,
  setDayActivity,
}) {
  const dispatch = useDispatch();

  const handleUpdateDayActivity = () => {
    dispatch(
      updateDayActivityRequest({
        data: dayActivity,
      })
    );
    setIsShowUpdateDayActivity(false);
  };

  const handleOnChange = (e) => {
    setDayActivity({
      idDayActivities: dayActivity.id,
      nameDayActivities: e.target.value,
    });
  };
  return (
    <Modal
      title="Chỉnh sửa tiêu đề "
      open={isShowUpdateDayActivity}
      onCancel={() => setIsShowUpdateDayActivity(false)}
      footer={null}
      width={300}
    >
      <Input
        onChange={(e) => handleOnChange(e)}
        placeholder="Nhập tiêu đề"
        value={dayActivity.name}
      />
      <Button
        onClick={() => handleUpdateDayActivity()}
        block
        type="primary"
        style={{ margin: "20px 0 0 0" }}
      >
        Lưu
      </Button>
    </Modal>
  );
}

export default UpdateDayActivity;
