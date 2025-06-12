/*
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2023-01-13 17:29:46
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2025-06-12 10:15:06
 * @FilePath: /my-app/src/view/login/login.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { Button, Checkbox, Form, Input, Flex } from "antd";
import "./login.css";

export default function Profile() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  console.log("profile");
  return (
    <div className="login-wrap">
      <div className="login-form">
        <Form
          name="login"
          layout="horizontal"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 360 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item label={null} className="login-form-title">
            <div className="login-form-title">Welcome Back</div>
          </Form.Item>
          <Form.Item label={null} className="login-form-type">
            <div className="login-form-type">Login with email</div>
          </Form.Item>
          <Form.Item label={null}>
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item label={null}>
            <Input placeholder="Password" />
          </Form.Item>
          <Form.Item label={null}>
            <Flex justify="space-between" align="center">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a href=" ">Forgot password</a>
            </Flex>
          </Form.Item>
          <Form.Item label={null}>
            <Button block type="primary" htmlType="submit">
              Log in
            </Button>
            or <a href=" ">Register now!</a>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
