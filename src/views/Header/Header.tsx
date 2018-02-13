import * as React from 'react'
import { Layout, Menu, Icon, Dropdown, Avatar } from 'antd'
import './Layout.css'

const { Header } = Layout

interface Props {
  collapsed: boolean
  toggle: () => void
}
export default class extends React.PureComponent<Props, {}> {
  render() {
    const menu = (
      <Menu className="user-menu" selectedKeys={[]}>
        <Menu.Item disabled={true}>
          <Icon type="user" />user
        </Menu.Item>
        <Menu.Item disabled={true}>
          <Icon type="setting" />setting
        </Menu.Item>
        <Menu.Item key="triggerError">
          <Icon type="close-circle" />close
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">
          <Icon type="logout" />logout
        </Menu.Item>
      </Menu>
    )
    return (
      <Header style={{ background: '#fff', padding: 0 }}>
        <div className="header">
          <Icon
            className="trigger"
            type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={this.props.toggle}
          />
          <div className="right">
            <Dropdown overlay={menu}>
              <span className="action account">
                <Avatar size="small" className="avatar" icon="user" />
                <span className="username">username</span>
              </span>
            </Dropdown>
          </div>
        </div>
      </Header>
    )
  }
}
