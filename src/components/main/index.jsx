import React from 'react'
import PubSub from 'pubsub-js'
import Sider from '../../components/sider'
import Content from '../../components/content'
import Login from '../../components/login'
import './index.scss'

export default class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            wantLogin: false
        }
    }

    componentDidMount() {
        // 接收到用户想要登录的信息，渲染 Login 组件
        PubSub.subscribe('wantloginFlag', (msg, wantLogin) => {
            this.setState({ wantLogin })
        })

        // 接收到用户登录成功的信息，渲染 Content 组件
        PubSub.subscribe('loginSuccessFlag', (msg, wantLogin) => {
            this.setState({ wantLogin })
        })
    }

    render() {
        const { wantLogin } = this.state
        return (
            <div className="main-container">
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