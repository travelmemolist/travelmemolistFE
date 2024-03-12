import { Modal } from "antd";

import * as S from "./style";

import { deleteActivityRequest } from "../../../../redux/slices/dayActivity.slice";
import { useDispatch } from "react-redux";
function DeleteActivityModal({
  isShowDeleteActivity,
  setIsShowDeleteActivity,
  activityId,
  scheduleId,
}) {
  const dispatch = useDispatch();
  return (
    <Modal
      open={isShowDeleteActivity}
      onCancel={() => setIsShowDeleteActivity(false)}
      footer={null}
      width={300}
    >
      <S.IconDelete>
        <img src="https://firebasestorage.googleapis.com/v0/b/travelmemolist.appspot.com/o/files%2Fdelete.png?alt=media&token=907d5ca4-7310-4e32-9223-8b42471ee9c4" />
      </S.IconDelete>
      <S.Heading>Xóa hoạt động ?</S.Heading>
      <S.Sub>Bạn có chắc chắn muốn xóa hoạt động này ?</S.Sub>
      <S.Action>
        <S.Back onClick={() => setIsShowDeleteActivity(false)}>Thoát</S.Back>
        <S.Delete
          onClick={() => {
            dispatch(deleteActivityRequest({ activityId, scheduleId }));
            setIsShowDeleteActivity(false);
          }}
        >
          Xóa
        </S.Delete>
      </S.Action>
    </Modal>
  );
}

export default DeleteActivityModal;
