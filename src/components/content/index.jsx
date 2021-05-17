import React from 'react'
import PubSub from 'pubsub-js'
import './index.scss'

export default class Content extends React.Component {
    constructor() {
        super()
        this.state = {
            text: ''
        }
    }

    componentDidMount() {
        // From：Sider 展示对应的内容
        PubSub.subscribe('siderToContent', (msg, text) => {
            this.setState({ text })
        })

        // From：Header 显示欢迎页
        PubSub.subscribe('wantReturnIndex', (msg, text) => {
            this.setState({ text })
        })
    }

    componentWillUnmount() {
        PubSub.unsubscribe('siderToContent')
        PubSub.unsubscribe('wantReturnIndex')
    }

    render() {
        const { text } = this.state
        return (
            <div className="content-container">
                <div className="content-main">
                    <p>{text === '' ? 'Hello,World!' : text}</p>
                </div>
            </div>
        )
    }
}