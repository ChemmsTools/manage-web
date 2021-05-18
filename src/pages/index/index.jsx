import React from 'react'
import Header from '../../components/header'
import Sider from '../../components/sider'
import Content from '../../components/content'
import { setCookie, getCookie, getSearch } from '../../utils/communication'
import axios from 'axios'
import './index.scss'

export default class Index extends React.Component {
    constructor() {
        super()
        this.state = {
        }
    }

    componentDidMount() {
        // const token = getCookie('token')
        // if (token) {
        //     // token请求
        // } else {
        //     axios.post('/chemmstools/login', {
        //         token: 
        //     })
        // }

        // const params = new URLSearchParams(getSearch());
        // const code = params.get('code')
        // if (code) {
        //     // 发请求
        // }

    }

    render() {
        return (
            <div className="index-container">
                <Header />
                <div className="main">
                    <Sider />
                    <Content />
                </div>
            </div>
        )
    }
}