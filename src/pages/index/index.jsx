import React from 'react'
import Header from '../../components/header'
import Sider from '../../components/sider'
import Content from '../../components/content'
import './index.scss'

export default class Index extends React.Component {
    constructor() {
        super()
        this.state = {
        }
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