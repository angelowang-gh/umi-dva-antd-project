import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Layout, Row, Col, Avatar, Popover } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import logo from '../assets/logo.svg';
import styles from './index.css';

const { Header } = Layout;

const HeaderView = () => {

  const [collapsed, setCollapsed] = useState(false);
  const content = <span>登录</span>;

  return (
    <Header className={styles.header}>

      <Row>
        {/* {
        React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          { onClick: () => { setCollapsed(!collapsed); } },
          '点我'
        )
      } */}

        <Col span={4}>
          <img alt="logo" src={logo} className={styles.img} />
          <span className={styles.logoTxt}>Umi Pro</span>
        </Col>

        <Col span={4}>
        {
          React.createElement(
            'a',
            { onClick: () => { setCollapsed(!collapsed); } },
            'Click me'
          )
        }
        </Col>

        <Col span={16}>
          <Popover placement="bottom" content={content} className={styles.avatarDiv}>
            <span> Hi,管理员</span>
            <Avatar size="large" icon="user" />
          </Popover>
        </Col>
        
      </Row>

    </Header>


  );
};

export default HeaderView;
