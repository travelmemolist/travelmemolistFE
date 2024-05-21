import {
  Col,
  Input,
  Row,
  Form,
  DatePicker,
  Button,
  notification,
  List,
} from "antd";
import * as S from "./style";

import { createScheduleRequest } from "../../redux/slices/schedule.slice";
import { useDispatch, useSelector } from "react-redux";
import { generatePath, useNavigate } from "react-router-dom";
import { ROUTES } from "constants/routes";
import { useState } from "react";
import Weather from "components/Weather";
import Map from "components/Map";
import axios from "axios";

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";

function CreateSchedule() {
  const [searchText, setSearchText] = useState("");
  const [listPlace, setListPlace] = useState([]);
  const [selectPosition, setSelectPosition] = useState(null);
  const [cityData, setCityData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [createForm] = Form.useForm();
  const { TextArea } = Input;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.auth);

  const handleCreateSchedule = (values) => {
    if (values.startDay.isAfter(values.endDay)) {
      notification.error({ message: "Ngày BD > Ngày KT" });
    } else {
      dispatch(
        createScheduleRequest({
          data: { ...values, userId: userInfo.data.userId },
          callback: (id) => {
            navigate(generatePath(ROUTES.USER.FOLLOW, { id: id }));
          },
        })
      );
    }
  };

  const handleSearch = () => {
    const params = {
      q: searchText,
      format: "json",
      addressdetails: 1,
      polygon_geojson: 0,
    };
    const queryString = new URLSearchParams(params).toString();
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        setListPlace(JSON.parse(result));
      })
      .catch((err) => console.log(err));
  };

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
    handleSearch();
  };

  const handleSelectPlace = async (place) => {
    const lat = place.lat;
    const lon = place.lon;
    const unit = "metric";
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&APPID=11babbb919460208f1af6c211c8d81cb`
    );
    if (response.data) {
      setCityData(response.data);
    }
    const response1 = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${unit}&APPID=11babbb919460208f1af6c211c8d81cb`
    );
    if (response1.data) {
      setForecastData(response1.data);
    }
  };

  return (
    <S.CreateSchedule>
      <Col span={24}>
        <h1>Thêm lịch trình</h1>
      </Col>
      <S.Content gutter={[16, 16]}>
        <S.FormCreate span={24}>
          <Row justify="space-between">
            <Col span={12}>
              <Form
                name="createForm"
                form={createForm}
                layout="vertical"
                action="/pay"
                onFinish={(values) => handleCreateSchedule(values)}
              >
                <Form.Item
                  label="Địa chỉ"
                  name="address"
                  rules={[{ required: true, message: "Bắt buộc!" }]}
                >
                  <Input value={searchText} onChange={handleInputChange} />
                  {listPlace.length > 0 && (
                    <List
                      itemLayout="horizontal"
                      dataSource={listPlace}
                      renderItem={(item) => (
                        <List.Item
                          onClick={() => {
                            setSelectPosition({
                              lat: item.lat,
                              lon: item.lon,
                            });
                            handleSelectPlace(item);
                          }}
                        >
                          <List.Item.Meta title={item.display_name} />
                        </List.Item>
                      )}
                    />
                  )}
                </Form.Item>
                <Form.Item
                  label="Tên lịch trình"
                  name="title"
                  rules={[{ required: true, message: "Bắt buộc!" }]}
                >
                  <Input />
                </Form.Item>
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <Form.Item
                      label="Ngày bắt đầu"
                      name="startDay"
                      rules={[{ required: true, message: "Bắt buộc!" }]}
                    >
                      <DatePicker showTime format={"DD/MM/YYYY"} />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      label="Thời gian kết thúc"
                      name="endDay"
                      rules={[{ required: true, message: "Bắt buộc!" }]}
                    >
                      <DatePicker format={"DD/MM/YYYY"} showTime />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item
                  label="Mô tả"
                  name="description"
                  rules={[{ required: true, message: "Bắt buộc!" }]}
                >
                  <TextArea rows={4} />
                </Form.Item>
                <Button type="primary" block htmlType="submit">
                  Thêm mới lịch trình
                </Button>
              </Form>
            </Col>
            <Col span={12}>
              <div >
                <Weather weatherData={cityData} forecastData={forecastData} />
              </div>
              <div style={{ width: "100%", height: "30%" }}>
                <Map selectPosition={selectPosition} />
              </div>
            </Col>
          </Row>
        </S.FormCreate>
      </S.Content>
    </S.CreateSchedule>
  );
}

export default CreateSchedule;
