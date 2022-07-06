import React from "react";
import SVapi from "../axios/svapi";
import {
  Avatar,
  Form,
  Input,
  InputNumber,
  Button,
  Space,
  Typography,
} from "antd";
const { Text, Link } = Typography;
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
export default function Update({ props, setShowGet }) {
  const [form] = Form.useForm();
  form.setFieldsValue({
    FirstName: props.FirstName,
    LastName: props.LastName,
    Age: Number(props.Age),
    Class: props.Class,
    Avatar: props.Avatar,
  });
  const onFinish = async (values) => {
    await SVapi.UpdateSv(props._id, JSON.stringify(values));
    setShowGet(true);
  };
  return (
    <div>
      <Form
        form={form}
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
        style={{ margin: "100px" }}
      >
        <Form.Item
          name="FirstName"
          label="First Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="LastName" label="Last Name">
          <Input />
        </Form.Item>
        <Form.Item
          name="Age"
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
        <Form.Item name="Class" label="Class">
          <Input />
        </Form.Item>
        <Form.Item name="Avatar" label="Avatar">
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Update Sinh Viên
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
