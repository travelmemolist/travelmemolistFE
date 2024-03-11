import { Button, Modal, notification } from "antd";
import * as S from "./style";

import { FaRectangleXmark } from "react-icons/fa6";
import { useEffect, useMemo, useState } from "react";
import { convertImageToBase64 } from "utils/files";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

import {
  getMemoryRequest,
  uploadMemoryRequest,
} from "../../../../redux/slices/memory.slice";

import { imageDb } from "../../../../FirebaseImage/configs";
import { useDispatch, useSelector } from "react-redux";
function AddMemoryModal({ setIsShowAddMemory, isShowAddMemory, activityId }) {
  const [imageShow, setImageShow] = useState(
    "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"
  );
  const [imageUpload, setImageUpload] = useState(null);

  const { memoryList } = useSelector((state) => state.memory);

  const dispatch = useDispatch();

  const handleChangeImageShow = async (e) => {
    const file = e.target.files[0];
    if (!["image/jpeg", "image/jpg", "image/png"].includes(file.type)) {
      return notification.error({ message: "File không đúng định dạng" });
    }
    const imgBase64 = await convertImageToBase64(file);
    await setImageShow(imgBase64);
    await setImageUpload(e.target.files[0]);
  };

  const handleUploadImage = () => {
    if (imageUpload) {
      const imgRef = ref(imageDb, `files/${v4()}`);
      uploadBytes(imgRef, imageUpload)
        .then((value) => {
          getDownloadURL(value.ref).then((url) => {
            dispatch(
              uploadMemoryRequest({
                data: {
                  activities: activityId,
                  urlImage: url,
                },
              })
            );
          });
        })
        .then(() => {
          notification.success({ message: "Thêm ảnh thành công" });
          setImageShow(
            "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"
          );
          setImageUpload(null);
        })
        .catch((error) => {
          notification.error({ message: "Lỗi khi cập nhật ảnh" });
        })
        .catch((error) => {
          notification.error({ message: "Lỗi khi lấy URL ảnh" });
        })
        .catch((error) => {
          notification.error({ message: "Lỗi khi tải ảnh lên" });
        });
    } else {
      notification.error({ message: "Vui lòng chọn ảnh!" });
    }
  };

  const handleShowMore = () => {
    dispatch(
      getMemoryRequest({
        page: memoryList.meta.page + 1,
        activityId: activityId,
        limit: 3,
        more: true,
      })
    );
  };
  // useEffect(() => {
  //   listAll(ref(imageDb, "files")).then((imgs) => {
  //     imgs.items.forEach((val) => {
  //       getDownloadURL(val).then((url) => {
  //         setImageUrl((data) => [...data, url]);
  //       });
  //     });
  //   });
  // }, []);

  const renderMemory = useMemo(() => {
    return memoryList.data.map((memory) => {
      return (
        <S.ImageItem key={memory.id} span={8}>
          <S.Xmark>
            <FaRectangleXmark size={14} color="red" />
          </S.Xmark>
          <S.Image src={memory.image} />
        </S.ImageItem>
      );
    });
  }, [memoryList.data]);
  return (
    <Modal
      open={isShowAddMemory}
      onCancel={() => setIsShowAddMemory(false)}
      footer={null}
      width={1300}
    >
      <S.Heading>Thêm kỉ niệm</S.Heading>
      <S.ImageList gutter={[16, 16]}>
        {renderMemory}
        {memoryList.data.length !== memoryList.meta.total && (
          <S.ShowMore type="primary" onClick={() => handleShowMore()}>
            Hiển thị thêm
          </S.ShowMore>
        )}
      </S.ImageList>
      <S.UploadImageWrapper gutter={[16, 16]}>
        <S.ImageUpload lg={6} sm={8} xs={8}>
          <S.Image src={imageShow} />
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
            onChange={(e) => handleChangeImageShow(e)}
          />
        </S.ChooseImageWrapper>
        <S.UploadFile lg={10} sm={6} xs={11}>
          <Button type="primary" onClick={() => handleUploadImage()}>
            Tải lên
          </Button>
        </S.UploadFile>
      </S.UploadImageWrapper>
    </Modal>
  );
}

export default AddMemoryModal;
