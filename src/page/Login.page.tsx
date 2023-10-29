import { Form, Input, Button } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

import { useLoginForm } from "../hook/LoginHook";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
  loginId?: string;
  loginPassword?: string;
};

export const LoginPage = () => {
  const { loginForm, handleLoginIdChange, handlePasswordChange, handleLogin } =
    useLoginForm();

  const [form] = Form.useForm();

  const onFinish = (values: unknown) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <h2>고도몰</h2>
      <p>Sign in to your account</p>

      <Form
        name="basic"
        layout={"vertical"}
        form={form}
        labelCol={{ span: 8 }}
        style={{ maxWidth: 600, width: "20%" }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType> label="Id" name="loginId">
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="아이디"
            value={loginForm.loginId}
            onChange={handleLoginIdChange}
          />
        </Form.Item>

        <Form.Item<FieldType> label="Password" name="loginPassword">
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="비밀번호"
            value={loginForm.loginPassword}
            onChange={handlePasswordChange}
          />
        </Form.Item>
        <Form.Item>
          <Button onClick={handleLogin} type="primary" htmlType="submit" block>
            sign in
          </Button>
        </Form.Item>
      </Form>
    </main>
  );
};

export default LoginPage;
