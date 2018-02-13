import * as React from 'react'
import { Layout, Menu, Icon, Dropdown, Avatar } from 'antd'
import './Layout.css'
const antImg = require('../../assets/images/ant.svg')
const { Header, Sider, Content } = Layout

interface LayoutState {
  collapsed: boolean
}
export default class extends React.PureComponent<{}, LayoutState> {
  state = {
    collapsed: false
  }
  toggle = () => {
    this.setState(prevState => ({collapsed: !prevState.collapsed}))
  }
  render() {
    const menu = (
      <Menu className="user-menu" selectedKeys={[]}>
        <Menu.Item disabled={true}><Icon type="user" />user</Menu.Item>
        <Menu.Item disabled={true}><Icon type="setting" />setting</Menu.Item>
        <Menu.Item key="triggerError"><Icon type="close-circle" />close</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout"><Icon type="logout" />logout</Menu.Item>
      </Menu>
    )
    return (
      <Layout style={{width: '100%', height: '100%'}} className="layout">
        <Sider className="sider" trigger={null} collapsible={true} collapsed={this.state.collapsed}>
          <div className="logo" key="logo">
              <img src={antImg} alt="logo" />
              <h1 className={this.state.collapsed ? 'hidden' : ''} >App Title</h1>
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
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <div className="header">
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <div className="right">
              <Dropdown overlay={menu}>
                <span className="action account">
                  <Avatar size="small" className="avatar" icon="user"/>
                  <span className="username">username</span>
                </span>
              </Dropdown>
            </div>
            </div>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    )
  }
}
