import * as React from "react";
import { Form, Input, Button } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useJoinForm } from "../hook/CustJoinHook";

export type JoinFormRequest = {
  loginId: string;
  loginPassword: string;
  userName: string;
  userPhone: string;
};

export const JoinPage = () => {
  const {
    joinForm,
    loginIdValid,
    handleLoginIdChange,
    handleValidateLoginId,
    handlePasswordChange,
    handlePasswordConfirmChange,
    handleJoin
  } = useJoinForm();

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
      <h2>회원 가입</h2>
      <Form
        name="basic"
        layout={"vertical"}
        labelCol={{ span: 8 }}
        style={{ maxWidth: 600, width: "20%" }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<JoinFormRequest> label="Id" name="loginId">
          <div style={{ display: "flex" }}>
            <Input
              prefix={<UserOutlined />}
              placeholder="아이디"
              value={joinForm.loginId}
              onChange={handleLoginIdChange}
              style={{ marginRight: "1rem" }}
            />
            <Button
              onClick={handleValidateLoginId}
              disabled={loginIdValid}
              type="primary"
            >
              중복확인
            </Button>
          </div>
        </Form.Item>
        <Form.Item<JoinFormRequest> label="Password" name="loginPassword">
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="비밀번호"
            value={joinForm.password}
            onChange={handlePasswordChange}
          />
        </Form.Item>
        <Form.Item label="Password Check">
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="비밀번호 확인"
            value={joinForm.passwordConfirm}
            onChange={handlePasswordConfirmChange}
          />
        </Form.Item>
        <Form.Item>
          <Button
            onClick={handleJoin}
            type="primary"
            disabled={
              joinForm.password !== joinForm.passwordConfirm || !loginIdValid
            }
            block
          >
            회원가입
          </Button>
        </Form.Item>
      </Form>
    </main>
  );
};

export default JoinPage;
