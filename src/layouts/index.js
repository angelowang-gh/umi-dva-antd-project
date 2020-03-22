import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'dva/router';
import DocumentTitle from 'react-document-title'; // 能动态修改页面title的
import { Layout, Menu, Icon, Drawer, Affix, Button } from 'antd';
import Header from './header';
import styles from './index.css';

const { Sider, Content } = Layout;

function BasicLayout(props) {

  const [current, setCurrent] = useState('1');
  const [isMobile] = useState(false);
  const [collapsed] = useState(false);

  const pageTitle = () => {
    return 'angelowang';
  };

  const { children } = props;

  return (
    <DocumentTitle title={pageTitle()}>

      <Layout>

        {/* 页头部分 */}
        <Header />

        {/* 内容主体 */}
        <Layout style={{ marginTop: 64 }}>

          {/* 侧边栏 */}
          <Sider trigger={null} collapsible>
            {/* 导航菜单 */}
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['testPage']}>
              
              <Menu.Item key="/">
                <Link to="/">
                  <Icon type="upload" />
                  <span>首页</span>
                </Link>
              </Menu.Item>

              <Menu.Item key = "ThemeSwitcher">
                <Link to = "/ThemeSwitcher/ThemeSwitcher" >
                  <Icon type="upload" />
                  <span>主题切换</span>
                </Link>
              </Menu.Item>

              <Menu.Item key = "LoginPage">
                <Link to = "#" >
                  <Icon type="upload" />
                  <span>登录页面</span>
                </Link>
              </Menu.Item>

              <Menu.SubMenu
                key="sub1"
                title={(
                  <span>
                    <Icon type="smile" />
                    <span>数据传递</span>
                  </span>)}
              >
                <Menu.Item key="testPage">
                  <Link to="testPage">
                    <Icon type="video-camera" />
                    <span>models传递数据</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="dataTransfer">
                  <Link to="dataTransfer">
                    <Icon type="user" />
                    <span>学习数据流</span>
                  </Link>
                </Menu.Item>
              </Menu.SubMenu>

            </Menu>
          </Sider>
          {/* 右侧主内容部分 */}
          <Content style={{ padding: '1rem', background: '#fff' }}>
            { children }
          </Content>

        </Layout>

      </Layout>

    </DocumentTitle>
  );
}

export default BasicLayout;
