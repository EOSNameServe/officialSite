import React, { Component } from 'react';
import { Input } from 'antd';
import './nav.css'

// const Search = Input.Search;

class Nav extends Component {
    render () {
      return (
        <div className="nav-container">
            <div className="logo">
                <span>ENS</span>
            </div>
            <div className="nav-content">
                <div className="nav-item">什么是 ENS</div>
                <div className="nav-item">ENS 的优势</div>
                <div className="nav-item">ENS 浏览器</div>
                <div className="nav-item">项目状态</div>
                <div className="nav-item">合作伙伴</div>
                <div className="nav-item">
                    <Input placeholder="Basic usage" />
                </div>
                <div className="nav-item">
                    
                </div>
            </div>
            

        </div>
      )
    }
}

export default Nav
  