import React from 'react'
import { Input, Button, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import PubSub from 'pubsub-js'
import MD5 from 'md5.js'
import './index.scss'
import 'antd/dist/antd.css'

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
        const { username, password } = this.state

        // 防止吐丝，每次先销毁之前的
        message.destroy()
        message.config({
            top: 150,
            duration: 1,
        });

        // 对获得的用户名和密码进行判定
        if (username === '') {
            message.error('用户名为空！');
        } else if (password === '') {
            message.error('密码为空！');
        } else if (password !== '202cb962ac59075b964b07152d234b70') {
            message.error('用户名或密码错误！');
        } else {
            message.loading('正在登录...', () => {
                message.destroy()
                message.success('登录成功！', () => {
                    // 向 index 页面传递登录成功提示，使其重新渲染页面
                    // 这里传 false 表示登录成功，离开登录页面
                    PubSub.publish('loginSuccessFlag', false)

                    // 向 Header 组件传递 username，用于展示
                    PubSub.publish('username', username)
                })
            });
        }
    }

    render() {
        return (
            <div className="login-container">
                <div className="login-form">
                    <div className="login-title">登录</div>
                    <div className="login login-username">
                        <Input onChange={this.updateUsername} placeholder="用户名" prefix={<UserOutlined />} />
                    </div>
                    <div className="login login-password">
                        <Input.Password onChange={this.updatePassword} placeholder="密码" />
                    </div>
                    <div className="login-btn">
                        <Button onClick={this.login} type="primary" shape="round" size="large">登录</Button>
                    </div>
                </div>
            </div>
        )
    }
}