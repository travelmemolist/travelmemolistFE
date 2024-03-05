import { Button, Col, Input, Modal, Row, Form } from "antd";

function UpdateActivity({ isShowUpdateActivity, setIsShowUpdateActivity }) {
  const [updateForm] = Form.useForm();
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
        // onFinish={(values) => handleCreateUpdateress(values)}
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
                  whitespace: true,
                  message: "Thời gian bắt đầu bắt buộc nhập!",
                },
              ]}
            >
              <Input placeholder="9:00" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="timeEnd"
              label="Thời gian kết thúc"
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: "Thời gian kết thúc là bắt buộc!",
                },
                {
                  max: 40,
                  min: 6,
                  message: "Điền từ 6 -> 40 kí tự",
                },
              ]}
            >
              <Input placeholder="11:00" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Button type="primary" block onClick={() => updateForm.submit()}>
              Thêm
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
