import { Modal } from "antd";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import axios from "../../../../config/AxiosConfig";
export default function UpdateStatusModal({
   scheduleId,
   isShowModalUpdateStatus,
   setIsShowModalUpdateStatus
}) {
   const navigate = useNavigate();
   return (
      <Modal
         open={isShowModalUpdateStatus}
         onCancel={() => setIsShowModalUpdateStatus(false)}
         footer={null}
         width={300}
      >
         <S.IconDelete>
            <img alt="" src="https://firebasestorage.googleapis.com/v0/b/travelmemolist.appspot.com/o/files%2Fdelete.png?alt=media&token=907d5ca4-7310-4e32-9223-8b42471ee9c4" />
         </S.IconDelete>
         <S.Heading>Thông báo ?</S.Heading>
         <S.Sub>Bạn đã hoàn thành lịch trình này ?</S.Sub>
         <S.Action>
            <S.Back onClick={() => setIsShowModalUpdateStatus(false)}>Thoát</S.Back>
            <S.Delete
               onClick={async () => {
                  const result = await axios.put(`/schedules/${scheduleId}`)
                  console.log(result);
                  setIsShowModalUpdateStatus(false);
                  navigate('/home')
               }}
            >
               Đồng ý
            </S.Delete>
         </S.Action>
      </Modal>
   )
}
