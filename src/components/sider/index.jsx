import React from 'react'
import { Menu } from 'antd';
import { AppstoreOutlined, DatabaseOutlined } from '@ant-design/icons';
import PubSub from 'pubsub-js'
import 'antd/dist/antd.css'
import './index.scss'

const { SubMenu } = Menu;

export default class Sider extends React.Component {
    constructor() {
        super()
        this.state = {
            // 所有 Submenu 组件的key值数组
            allSubmenuKeys: ['tools', 'components'],

            // 当前展开的 SubMenu 组件的 key 值数组，默认情况不展开
            openKeys: []
        }
    }

    // 管理菜单的展开闭合
    // keys：当前展开的 SubMenu 菜单项 key 数组
    onOpenChange = (keys) => {
        const { allSubmenuKeys, openKeys } = this.state

        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);

        if (allSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys: keys })
        } else {
            const temp = latestOpenKey ? [latestOpenKey] : []
            this.setState({ openKeys: temp })
        }
    };

    // 点击后 Content 组件进行对应内容响应
    showContent = (m) => {
        // 向 Content 组件传递选择的内容，使其展示对应信息
        PubSub.publish('siderToContent', m.key)
    }


    render() {
        const { openKeys } = this.state

        return (
            <div className="sider-container">
                <Menu mode="inline" openKeys={openKeys} onOpenChange={this.onOpenChange} style={{ width: "100%" }}>
                    <SubMenu key="tools" icon={<DatabaseOutlined />} title="工具">
                        <Menu.Item key="tools_1" onClick={this.showContent}>Option 1</Menu.Item>
                        <Menu.Item key="tools_2" onClick={this.showContent}>Option 2</Menu.Item>
                    </SubMenu>
                    <SubMenu key="components" icon={<AppstoreOutlined />} title="组件">
                        <Menu.Item key="components_1" onClick={this.showContent}>Option 3</Menu.Item>
                        <Menu.Item key="components_2" onClick={this.showContent}>Option 4</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}