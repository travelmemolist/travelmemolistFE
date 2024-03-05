import { Button, Col, Modal, notification } from "antd";
import * as S from "./style";

import { FaRectangleXmark, FaImage } from "react-icons/fa6";
import { COLOR } from "constants/color";
import { useState } from "react";
import { convertImageToBase64 } from "utils/files";

function AddMemoryModal({ setIsShowAddMemory, isShowAddMemory }) {
  const [imageUpload, setImageUpload] = useState(
    "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"
  );

  const handleChangeImageUpload = async (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (!["image/jpeg", "image/jpg", "image/png"].includes(file.type)) {
      return notification.error({ message: "File không đúng định dạng" });
    }
    const imgBase64 = await convertImageToBase64(file);
    await setImageUpload(imgBase64);
  };
  return (
    <Modal
      open={isShowAddMemory}
      onCancel={() => setIsShowAddMemory(false)}
      footer={null}
      width={1300}
    >
      <S.Heading>Thêm kỉ niệm</S.Heading>
      <S.ImageList gutter={[16, 16]}>
        <S.ImageItem span={8}>
          <S.Xmark>
            <FaRectangleXmark size={14} color="red" />
          </S.Xmark>
          <S.Image src="https://pos.nvncdn.com/86c7ad-50310/art/artCT/20230420_7EZ6al08.png" />
        </S.ImageItem>
        <S.ImageItem span={8}>
          <S.Xmark>
            <FaRectangleXmark size={14} color="red" />
          </S.Xmark>
          <S.Image src="https://pos.nvncdn.com/86c7ad-50310/art/artCT/20230420_7EZ6al08.png" />
        </S.ImageItem>
        <S.ImageItem span={8}>
          <S.Xmark>
            <FaRectangleXmark size={14} color="red" />
          </S.Xmark>
          <S.Image src="https://pos.nvncdn.com/86c7ad-50310/art/artCT/20230420_7EZ6al08.png" />
        </S.ImageItem>
        <S.ShowMore type="primary">Hiển thị thêm</S.ShowMore>
      </S.ImageList>
      <S.UploadImageWrapper gutter={[16, 16]}>
        <S.ImageUpload lg={6} sm={8} xs={8}>
          <S.Image src={imageUpload} />
        </S.ImageUpload>
        <S.ChooseImageWrapper lg={8} sm={10} xs={12}>
          <p>Vui lòng chọn hình ảnh</p>
          <label for="imageUpload">
            <S.ChooseImage>Chọn ảnh</S.ChooseImage>
          </label>
          <input
            type="file"
            id="imageUpload"
            accept=".png, .jpg, .jpeg"
            onChange={(e) => handleChangeImageUpload(e)}
          />
        </S.ChooseImageWrapper>
        <S.UploadFile lg={10} sm={6} xs={11}>
          <Button type="primary">Tải lên</Button>
        </S.UploadFile>
      </S.UploadImageWrapper>
    </Modal>
  );
}

export default AddMemoryModal;
