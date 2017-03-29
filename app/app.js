import React from 'react';
import ReactDOM from 'react-dom';
import { Layout,Menu, Icon } from 'antd';
import CodeMirror from 'react-codemirror';

import './app.less';
import './editor/editor.less'

const { Header, Content,Footer } = Layout;
var options = {
  mode:'javascript',
  theme:'mdn-like'
};
ReactDOM.render(
  <Layout>
    <Header className="header">
      <div className="logo" ><img src="./app/logo.png"/></div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '48px' }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content>
      <CodeMirror options={options} />
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      
    </Footer>
  </Layout>
, document.getElementById('app'));