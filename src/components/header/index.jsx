import React from 'react';
import './index.scss'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  login = () => {
    this.setState({ isLogin: true })
    const { isLogin } = this.state
    this.props.getHeaderValue(isLogin)
  }

  componentDidMount() {
    const { isLogin } = this.props
    this.setState({ isLogin })
  }

  render() {
    return (
      <div className='header-container'>
        <div className="title">ChemmsTools</div>
        <div className="user-ico" onClick={this.login}>
          <svg t="1620992650237" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1892" width="30" height="30"><path d="M512 962C263.488 962 62 760.513 62 512S263.488 62 512 62s450 201.488 450 450-201.488 450-450 450z m0-825c-207.113 0-375 167.887-375 375s167.887 375 375 375 375-167.888 375-375-167.888-375-375-375z m0 675a299.4 299.4 0 0 1-234-112.5A299.4 299.4 0 0 1 512 587a299.25 299.25 0 0 1 233.962 112.5A299.25 299.25 0 0 1 512 812z m0-262.5a150 150 0 1 1 0-300 150 150 0 0 1 0 300z" p-id="1893" fill="#ffffff"></path></svg>
        </div>
      </div>
    );
  }
}
