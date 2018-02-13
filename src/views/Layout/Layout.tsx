import * as React from 'react'
import { Layout } from 'antd'
import './Layout.css'
import SideMenu from '../SideMenu/SideMenu'
import Header from '../Header/Header'

const { Content } = Layout

interface LayoutState {
  collapsed: boolean
}
export default class extends React.PureComponent<{}, LayoutState> {
  state = {
    collapsed: false,
  }
  toggle = () => {
    this.setState(prevState => ({ collapsed: !prevState.collapsed }))
  }
  render() {
    return (
      <Layout style={{ width: '100%', height: '100%' }} className="layout">
        <SideMenu collapsed={this.state.collapsed} />
        <Layout>
          <Header collapsed={this.state.collapsed} toggle={this.toggle} />
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
