import React from 'react'
import PubSub from 'pubsub-js'
import './index.scss'

export default class Content extends React.Component {
    constructor() {
        super()
        this.state = {
            text: 'Hello,World!'
        }
    }

    componentDidMount() {
        // 从 Sider 组件订阅信息，展示对应的内容
        PubSub.subscribe('siderToContent', (msg, text) => {
            this.setState({ text })
        })
    }

    render() {
        const { text } = this.state
        return (
            <div className="content-container">
                <div className="content-main">
                    <p>{text}</p>
                </div>
            </div>
        )
    }
}