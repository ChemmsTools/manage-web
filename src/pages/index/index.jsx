import React from 'react'
import PubSub from 'pubsub-js'
import Header from '../../components/header'
import Sider from '../../components/sider'
import Content from '../../components/content'
import Login from '../../components/login'
import './index.scss'

export default class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            wantLogin: false
        }
    }

    componentDidMount() {
        // 从 Heder 组件接收到用户想要登录的请求，渲染 Login 组件
        PubSub.subscribe('wantloginFlag', (msg, wantLogin) => {
            this.setState({ wantLogin })
        })

        // 从 Heder 组件接收到用户想要返回的请求，渲染 Sider、Content 组件
        PubSub.subscribe('wantShowWelcome', (msg, text) => {
            this.setState({ wantLogin: false })
        })

        // 从 Login 组件接收到用户登录成功的信息，渲染 Content 组件
        PubSub.subscribe('loginSuccessFlag', (msg, wantLogin) => {
            this.setState({ wantLogin })
        })
    }

    render() {
        const { wantLogin } = this.state
        return (
            <div className="index-container">
                <Header />
                {
                    wantLogin ?
                        <Login /> :
                        <div className="main">
                            <Sider />
                            <Content />
                        </div>
                }
            </div>
        )
    }
}