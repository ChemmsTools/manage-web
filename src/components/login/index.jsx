import React from 'react'
import { Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import MD5 from 'md5.js'
import './index.scss'

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    updateUsername = (e) => {
        this.setState({ username: e.target.value })
    }

    updatePassword = (e) => {
        const { value } = e.target
        const password = new MD5().update(value).digest('hex')
        this.setState({ password })
    }

    login = () => {
        if (1) {
            console.log(1);
            this.props.getLoginValue(false)
        }
    }

    render() {
        return (
            <div className="login-container" id="login-container">
                <div className="login login-title">登录</div>
                <div className="login login-username">
                    <Input onChange={this.updateUsername} placeholder="用户名" prefix={<UserOutlined />} />
                </div>
                <div className="login login-password">
                    <Input.Password onChange={this.updatePassword} placeholder="密码" />
                </div>
                <div className="login login-btn">
                    <Button onClick={this.login} type="primary" shape="round" size="large">登录</Button>
                </div>
            </div>
        )
    }
}