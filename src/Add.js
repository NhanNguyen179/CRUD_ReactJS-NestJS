import React from "react";
import SVapi from "../axios/svapi";
import { useNavigate } from "react-router-dom";
import { Form, Input, InputNumber, Button } from "antd";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
export default function Add({ sv }) {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    console.log(JSON.stringify(values.user));
    const respone = await SVapi.AddSv(JSON.stringify(values.user));
    navigate("/");
  };
  return (
    <div>
      {" "}
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
        style={{ margin: "100px" }}
      >
        <Form.Item
          name={["user", "FirstName"]}
          label="First Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name={["user", "LastName"]} label="Last Name">
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "Age"]}
          label="Age"
          rules={[
            {
              type: "number",
              min: 0,
              max: 99,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item name={["user", "Class"]} label="Class">
          <Input />
        </Form.Item>
        <Form.Item name={["user", "Avatar"]} label="Avatar">
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Thêm Sinh Viên
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
