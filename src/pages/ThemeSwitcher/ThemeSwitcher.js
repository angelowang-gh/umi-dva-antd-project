import React, { Component } from 'react';
import { Menu, Dropdown, Button, message } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import classNames from 'classNames'; // 需要多个class时或要逻辑计算后决定是否要class
import styles from './index.less';

class ThemeSwitcher extends Component {

  constructor(props) {
    super(props);
    this.state = { theme: null };
  }

  resetTheme = (evt) => {
    evt.preventDefault();
    this.setState({
      theme: null,
    });
  };

  chooseTheme = (theme, evt) => {
    evt.preventDefault();
    this.setState({
      theme,
    });
  };

  render() {

    const menuList = (
      <Menu overlayClassName="menuList">
        <Menu.Item>
          <a target="_blank"
            rel="noopener noreferrer" href="#"
            onClick={e => this.chooseTheme('blue', e)}>
            蓝色
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank"
            rel="noopener noreferrer" href="#"
            onClick={e => this.chooseTheme('red', e)}>
            红色
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" 
            rel="noopener noreferrer" href="#" 
            onClick={e => this.chooseTheme('green', e)}>
            绿色
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" 
            rel="noopener noreferrer" href="#" 
            onClick={this.resetTheme}>
            默认
          </a>
        </Menu.Item>
      </Menu>
    );

    const { theme } = this.state;

    const themeClass = theme ? theme.toLowerCase() : 'gray';
    // const themeClassValue = themeClass ;
    // let colorClass = classNames({themeClass});

    return (
      <div>

        <Dropdown overlay={menuList}>
          <a className="ant-dropdown-link">
            {/* Hover me <DownOutlined /> */} 方案 +
          </a>
        </Dropdown>

        {/* <Dropdown overlay={menu}>
          <Button>方案稿</Button>
        </Dropdown> */}

        {/* <div className= {styles[themeClass]}> */}
        <div className={classNames(styles.normal, styles[themeClass])}>
          {themeClass}
          <h1>+++</h1>
          {theme || '默认方案'}
          <h1> + 这里上面是个啥</h1>
        </div>

      </div>
    );
  }
}

export default ThemeSwitcher;
