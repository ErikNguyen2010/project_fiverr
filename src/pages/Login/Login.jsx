import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Modal } from 'antd';
import { useState } from 'react';


export default function Login(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <section className="login">
      <div className='container'>
        <div className="row">
          <div className="col-12">
            <div className="content">
            <Button type="primary" onClick={showModal}>
            Login
            </Button>
            <Modal destroyOnClose={true} visible={isModalVisible} onCancel={handleCancel}>
            <h1 className='login__header'>Sign In to Fiverr</h1>
                    <div className='login__apps'>
                      <a href="https://www.facebook.com/" className='btn-facebook btn btn-primary'>
                        <i className='fab fa-facebook'></i>
                        Continue with Facebook
                      </a>
                      <br/>
                      <a href="https://www.gmail.com/" className='btn-google btn btn-primary'>
                        <i className="fa-brands fa-google"></i>
                        Continue with Google
                      </a>
                      <br/>
                      <a href="https://www.gmail.com/" className='btn-google btn btn-primary'>
                        <i className="fa-brands fa-apple"></i>
                        Continue with Apple
                      </a>
                      <div className="login__separator">
                        <span>OR</span>
                      </div>
                    </div>
                    <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onFinish}
                  >
                    <Form.Item
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your Username!',
                        },
                      ]}
                    >
                      <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email / Username" />
                    </Form.Item>
                    <Form.Item
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your Password!',
                        },
                      ]}
                    >
                      <Input
                        
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                      />
                    </Form.Item>
                    <Form.Item>
                      <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                      </Form.Item>

                      <a className="login-form-forgot" href="">
                        Forgot password
                      </a>
                    </Form.Item>

                    <Form.Item>
                      <Button  htmlType="submit" className="login-form-button">
                        Continue
                      </Button>
                      <div className="login__separator">
                      </div>
                      <div className='text-center'>
                        <span className='login__text'>Not a member yet?</span> 
                        <a className='login__register' href="">Register now!</a>
                      </div>
                    </Form.Item>
                  </Form>
            </Modal>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}



