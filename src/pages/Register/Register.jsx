import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {
    AutoComplete,
    Button,
    Cascader,
    Checkbox,
    Col,
    Form,
    Input,
    InputNumber,
    Row,
    Select,
    Modal
  } from 'antd';
import { useState } from 'react';
const { Option } = Select;

const formItemLayout = {
labelCol: {
    xs: {
    span: 24,
    },
    sm: {
    span: 8,
    },
},
wrapperCol: {
    xs: {
    span: 24,
    },
    sm: {
    span: 16,
    },
},
};
const tailFormItemLayout = {
wrapperCol: {
    xs: {
    span: 24,
    offset: 0,
    },
    sm: {
    span: 16,
    offset: 8,
    },
},
};
  



export default function Register() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();

const onFinish = (values) => {
console.log('Received values of form: ', values);
};
const showModal = () => {
setIsModalVisible(true);
};

const prefixSelector = (
<Form.Item name="prefix" noStyle>
    <Select
    style={{
        width: 70,
    }}
    >
    <Option value="84">+84</Option>
    </Select>
</Form.Item>
);

const handleCancel = () => {
setIsModalVisible(false);
};
 
  return (
    <section className='register'>
         <div className='container'>
        <div className="row">
          <div className="col-12">
            <div className="content">
            <Button type="primary" onClick={showModal}>
            Register
            </Button>
            <Modal destroyOnClose={true} visible={isModalVisible} onCancel={handleCancel}>
            <h1 className='register__header'>Join Fiverr</h1>
                    <div className='register__apps'>
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
                      <div className="register__separator">
                        <span>OR</span>
                      </div>
                    </div>
                    <div className="register__form">
                        <Form
                            {...formItemLayout}
                            form={form}
                            name="register"
                            onFinish={onFinish}
                            scrollToFirstError
                            initialValues={{
                                prefix: '84',
                            }}
                            >
                            <Form.Item
                                name="email"
                                label="E-mail"
                                rules={[
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                label="Password"
                                rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                                ]}
                                hasFeedback
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item
                                name="confirm"
                                label="Confirm Password"
                                dependencies={['password']}
                                hasFeedback
                                rules={[
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }

                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                    },
                                }),
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item
                                name="nickname"
                                label="Nickname"
                                tooltip="What do you want others to call you?"
                                rules={[
                                {
                                    required: true,
                                    message: 'Please input your nickname!',
                                    whitespace: true,
                                },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                name="phone"
                                label="Phone Number"
                                rules={[
                                {
                                    required: true,
                                    message: 'Please input your phone number!',
                                },
                                ]}
                            >
                                <Input
                                addonBefore={prefixSelector}
                                style={{
                                    width: '100%',
                                }}
                                />
                            </Form.Item>

                            <Form.Item
                                name="agreement"
                                valuePropName="checked"
                                rules={[
                                {
                                    validator: (_, value) =>
                                    value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                                },
                                ]}
                                {...tailFormItemLayout}
                            >
                                <Checkbox>
                                I have read the <a href="" className='register__agree'>agreement</a>
                                </Checkbox>
                            </Form.Item>
                            <Form.Item {...tailFormItemLayout}>
                                <Button className='register__btn' htmlType="submit">
                                Register
                                </Button>
                                <div className="register__separator2">
                                </div>
                                <div>
                                    <span className='register__text'>Already member?</span> 
                                    <a className='register__register' href="">Login now!</a>
                                </div>
                            </Form.Item>
                        </Form>
                    </div>
            </Modal>
            </div>
          </div>
        </div>
      
      </div>
    </section>
  )
}
