import React from 'react';
import { Button, Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import router from 'umi/router';
import styles from './index.css';

export default function () {

  const testClick = () => {
    router.push('/testPage');
  };

  const btnClick = () => {
    router.push('/dataTransfer');
  };

  return (
    <React.Fragment>

      {/* <Breadcrumb>
        <Breadcrumb.Item href="#">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">
          <UserOutlined />
          <span>Application List</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Application</Breadcrumb.Item>
      </Breadcrumb> */}

      <h1>这是首页 - src > page > index.js</h1>
      <div className={styles.welcome} />
      <div className={styles.btns}>
        <Button type="primary" onClick={testClick} style={{ marginRight: 10 }}>
          model传递数据页
        </Button>
        <Button type="primary" onClick={btnClick}>学习数据流</Button>
      </div>
    </React.Fragment>
  );
}
