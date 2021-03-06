import React, { Component } from 'react';
import { Input } from 'antd';
import './nav.less'

// const Search = Input.Search;

class Nav extends Component {
    render () {
      return (
        <div className="nav-container">
            <div className="logo">
                <span>ENS</span>
            </div>
            <nav className="nav-content">
                <a href="#whatis"><li className="nav-item">什么是 ENS</li></a>
                <a href="#advantage"><li className="nav-item">ENS 的优势</li></a>
                <a href="#brower"><li className="nav-item">ENS 浏览器</li></a>
                <a href="#project"><li className="nav-item">项目状态</li></a>
                <a href="#"><li className="nav-item">合作伙伴</li></a>
                <a href="#"><li className="nav-item">
                    <Input placeholder="Basic usage" />
                </li></a>
                <a href="#"><li className="nav-item">
                    <figure></figure>
                </li></a>
            </nav>
            

        </div>
      )
    }
}

export default Nav
  