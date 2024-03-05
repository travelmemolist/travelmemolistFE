import { Button, Col, Input, Modal, Row, Form, TimePicker } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
function AddActivity({ isShowAddActivity, setIsShowAddActivity }) {
  const [addForm] = Form.useForm();

  const onChange = (time, timeString) => {
    console.log(timeString);
  };
  return (
    <Modal
      title="Thêm hoạt động"
      open={isShowAddActivity}
      onCancel={() => setIsShowAddActivity(false)}
      footer={null}
      width={700}
    >
      <Form
        form={addForm}
        name="addActivity"
        layout="vertical"
        // onFinish={(values) => handleCreateAddress(values)}
      >
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Form.Item
              name="name"
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
            <Form.Item name="describe" label="Mô tả">
              <Input placeholder="Mô tả" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="timeStart"
              label="Thời gian bắt đầu"
              rules={[
                {
                  required: true,
                  message: "Thời gian bắt đầu bắt buộc nhập!",
                },
              ]}
            >
              <TimePicker
                onChange={onChange}
                defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="timeEnd"
              label="Thời gian kết thúc"
              rules={[
                {
                  required: true,
                  message: "Thời gian kết thúc là bắt buộc!",
                },
              ]}
            >
              <TimePicker
                onChange={onChange}
                defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Button type="primary" block onClick={() => addForm.submit()}>
              Thêm
            </Button>
          </Col>
          <Col span={12}>
            <Button block onClick={() => setIsShowAddActivity(false)}>
              Trở lại
            </Button>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
}

export default AddActivity;
