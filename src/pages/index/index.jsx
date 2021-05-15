import React from 'react'
import Header from '../../components/header'
import Main from '../../components/main'
import './index.scss'

export default class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className="index-container">
                <Header />
                <Main />
            </div>
        )
    }
}