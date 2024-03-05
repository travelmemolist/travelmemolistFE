import { Col, Input, Row, Form, DatePicker, Space, Button } from "antd";
import * as S from "./style";
function CreateSchedule() {
  const [createForm] = Form.useForm();
  const { TextArea } = Input;
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <S.CreateSchedule>
      <Col span={24}>
        <h1>Thêm lịch trình</h1>
      </Col>
      <S.Content gutter={[16, 16]}>
        <S.FormCreate span={12}>
          <Form
            name="createForm"
            form={createForm}
            layout="vertical"
            action="/pay"
            // onFinish={(values) => handleSubmitCheckoutForm(values)}
          >
            <Row
              gutter={[16, 16]}
              justify="space-between"
              style={{ marginTop: "15px" }}
            >
              <Col span={24}>
                <Form.Item
                  label="Địa chỉ"
                  name="address"
                  rules={[{ required: true, message: "Bắt buộc!" }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  label="Tên lịch trình"
                  name="name"
                  rules={[{ required: true, message: "Bắt buộc!" }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Thời gian bắt đầu"
                  name="name"
                  rules={[{ required: true, message: "Bắt buộc!" }]}
                >
                  <DatePicker showTime onChange={onChange} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Thời gian kết thúc"
                  name="name"
                  rules={[{ required: true, message: "Bắt buộc!" }]}
                >
                  <DatePicker showTime onChange={onChange} />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  label="Mô tả"
                  name="name"
                  rules={[{ required: true, message: "Bắt buộc!" }]}
                >
                  <TextArea rows={4} />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Button type="primary" block htmlType="submit">
                  Thêm mới lịch trình
                </Button>
              </Col>
            </Row>
          </Form>
        </S.FormCreate>
        <S.Image span={12}>
          <img
            style={{ height: "80%" }}
            src="https://s3-alpha-sig.figma.com/img/4bfd/d910/560cb3c4130ce71bd44dcd0c0e3627fc?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZvoXZFv7H8TMPMeg8cWMZtwuejXPE2LVK40zFknlYXPjBFIdZGPgNDvU4nSPKJ64ekrid5c~0vsKdHNvsAgrXykSKd-6TlmZI3SJpIz8QZDgRwqTqaiYVwkPoCAWtYCfa8S3wSnVn9bC0TgWTlRJGDCBx~5CIxMxYYwXVYgS~lwfnqHX2VP6cGp9OphH~~kyvgoUXZTJlAgIk81UCcCMMPuKUa5UYDVoApq4y8b8MCa2ua2yH7whjiOD84J51LYt96qV38cyzFhrj69IgTvvtzZGXambaxKMBa5y~SXRaMVisUOjKjpsXE2vIcwcgqovrS4Vme6eSfUiTIc61XtZNw__"
          />
        </S.Image>
      </S.Content>
    </S.CreateSchedule>
  );
}

export default CreateSchedule;
