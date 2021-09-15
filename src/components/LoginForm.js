import {useState} from 'react';
import {
    Form,
    Input,
    Button,
    Row,
    Col
} from 'antd';
import './LoginFormStyle.css'
import * as LoginApi from '../api/login'

const LoginForm = () => {
    const onFinish = async (values) => {
        await LoginApi.login(username, password);
        console.log('Success', values);
    }
    const onFinishFailed = (values) => {
        console.log('Fail', values);
    }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Row className="container">
                <Col className="form-container">
                    <Form
                        className="form"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >

                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input onChange={e => setUsername(e.target.value)}/>
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password onChange={e => setPassword(e.target.value)}/>
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </>
    );
};


export default LoginForm;