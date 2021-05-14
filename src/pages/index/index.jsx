import React from 'react'
import Header from '../../components/header'
import Sider from '../../components/sider'
import Content from '../../components/content'
import Login from '../../components/login'
import './index.scss'

export default class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: false
        }
    }

    changeLogin = (isLogin) => {
        this.setState({ isLogin })
    }

    shouldComponentUpdate() {
        const { isLogin } = this.state
        const main = document.getElementById("main")
        const login = document.getElementById("login-container")

        if (isLogin) {
            login.style.display = 'flex'
            main.style.display = 'none'
        } else {
            main.style.display = 'flex'
            login.style.display = 'none'
        }

        return true
    }


    render() {
        const { isLogin } = this.state

        return (
            <div className="index-container">
                <Header isLogin={isLogin} getHeaderValue={this.changeLogin} />
                <div className="main" id="main">
                    <div className="left">
                        <Sider />
                    </div>
                    <Content />
                </div>
                <Login getLoginValue={this.changeLogin} />
            </div>
        )
    }
}