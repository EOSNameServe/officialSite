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
                <li className="nav-item">什么是 ENS</li>
                <li className="nav-item">ENS 的优势</li>
                <li className="nav-item">ENS 浏览器</li>
                <li className="nav-item">项目状态</li>
                <li className="nav-item">合作伙伴</li>
                <li className="nav-item">
                    <Input placeholder="Basic usage" />
                </li>
                <li className="nav-item">
                    <figure></figure>
                </li>
            </nav>
            

        </div>
      )
    }
}

export default Nav
  