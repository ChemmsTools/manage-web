import React from 'react';
import { message } from 'antd'
import PubSub from 'pubsub-js'
import './index.scss'
import 'antd/dist/antd.css'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 用户是否登录
      isLogin: false,

      username: ''
    };
  }

  // 向 index 页面请求返回首页
  returnIndex = () => {
    PubSub.publish('wantReturnFlag', false)
  }

  // 点击按钮，向 index 页面请求登录，使其渲染 Login 组件
  wantLogin = () => {
    PubSub.publish('wantloginFlag', true)
  }

  // 退出登录
  exit = () => {
    message.destroy()
    message.config({
      top: 150,
      duration: 1,
    });

    message.loading('正在登出...', () => {
      message.destroy()
      message.success('登出成功！', () => {
        this.setState({ isLogin: false })
      })
    });
  }

  componentDidMount() {
    // 接收 Login 组件传回的username
    PubSub.subscribe('username', (msg, username) => {
      this.setState({ username, isLogin: true })
    })
  }

  render() {
    const { isLogin, username } = this.state

    return (
      <div className='header-container' >
        <div className="title-ico" style={{ backgroundImage: 'URL(./images/ico.jpg)' }} onClick={this.returnIndex}></div>
        <div className="title-name">狗子工具包</div>
        <div className="accout">
          {
            isLogin ?
              <div className="did-login">
                <div className="welcome">{username}</div>
                <div className="exit" onClick={this.exit}>退出</div>
              </div> :
              <div className="user-login-btn" onClick={this.wantLogin}>
                <svg t="1620992650237" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1892" width="30" height="30"><path d="M512 962C263.488 962 62 760.513 62 512S263.488 62 512 62s450 201.488 450 450-201.488 450-450 450z m0-825c-207.113 0-375 167.887-375 375s167.887 375 375 375 375-167.888 375-375-167.888-375-375-375z m0 675a299.4 299.4 0 0 1-234-112.5A299.4 299.4 0 0 1 512 587a299.25 299.25 0 0 1 233.962 112.5A299.25 299.25 0 0 1 512 812z m0-262.5a150 150 0 1 1 0-300 150 150 0 0 1 0 300z" p-id="1893" fill="#ffffff"></path></svg>
              </div>
          }
        </div>
      </div>
    );
  }
}