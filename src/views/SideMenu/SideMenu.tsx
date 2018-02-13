import * as React from 'react'
import { Layout, Menu, Icon } from 'antd'

const antImg = require('../../assets/images/ant.svg')
const { Sider } = Layout

interface Props {
  collapsed: boolean
}
export default class extends React.PureComponent<Props, {}> {
  render() {
    return (
      <Sider
        className="sider"
        trigger={null}
        collapsible={true}
        collapsed={this.props.collapsed}
      >
        <div className="logo" key="logo">
          <img src={antImg} alt="logo" />
          <h1 className={this.props.collapsed ? 'hidden' : ''}>App Title</h1>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span>nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span>nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span>nav 3</span>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}
