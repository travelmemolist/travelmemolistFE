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

import { updateActivityRequest } from "../../../../redux/slices/dayActivity.slice";

function UpdateActivity({
  isShowUpdateActivity,
  setIsShowUpdateActivity,
  activityId,
  scheduleId,
}) {
  const [updateForm] = Form.useForm();

  const { activity } = useSelector((state) => state.dayActivity);

  const dispatch = useDispatch();
  useEffect(() => {
    if (activityId) {
      updateForm.setFieldsValue({
        activityName: activity.data.activityName,
        description: activity.data?.description,
        startTime: moment(activity.data.startTime),
        endTime: moment(activity.data.endTime),
      });
    }
  }, [activity.data]);

  const handleUpdateActivity = (values) => {
    if (values.startTime.valueOf() > values.endTime.valueOf()) {
      notification.error({ message: "Nhập thời gian chưa hợp lệ!" });
    } else {
      dispatch(
        updateActivityRequest({
          data: {
            id: activityId,
            startTime: values.startTime,
            endTime: values.endTime,
            scheduleId: scheduleId,
            ...values,
          },
        })
      );
      setIsShowUpdateActivity(false);
    }
  };
  return (
    <Modal
      title="Chỉnh sửa hoạt động "
      open={isShowUpdateActivity}
      onCancel={() => setIsShowUpdateActivity(false)}
      footer={null}
      width={700}
    >
      <Form
        form={updateForm}
        name="UpdateActivity"
        layout="vertical"
        onFinish={(values) => handleUpdateActivity(values)}
      >
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Form.Item
              name="activityName"
              label="Tên hoạt động"
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: "Tên hoạt là bắt buộc!",
                },
                {
                  max: 40,
                  min: 6,
                  message: "Điền từ 6 -> 40 kí tự",
                },
              ]}
            >
              <Input placeholder="Nhập tên hoạt động" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="description" label="Mô tả">
              <Input placeholder="Mô tả" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="startTime"
              label="Thời gian bắt đầu"
              rules={[
                {
                  required: true,
                  message: "Thời gian bắt đầu bắt buộc nhập!",
                },
              ]}
            >
              <TimePicker format={"HH:mm"} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="endTime"
              label="Thời gian kết thúc"
              rules={[
                {
                  required: true,
                  message: "Thời gian kết thúc là bắt buộc!",
                },
              ]}
            >
              <TimePicker format={"HH:mm"} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Button type="primary" block onClick={() => updateForm.submit()}>
              Cập nhật
            </Button>
          </Col>
          <Col span={12}>
            <Button block onClick={() => setIsShowUpdateActivity(false)}>
              Trở lại
            </Button>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
}

export default UpdateActivity;
