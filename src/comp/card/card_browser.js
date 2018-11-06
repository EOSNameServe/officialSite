import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Input } from 'antd';

const Search = Input.Search;
class CardBrowser extends Component {
    render () {
      return (
        <section className="background background_dark">
          <Row>
            <Col span={12} offset={4}>
              <div className="container">
                <div className="title mb30">
                  ENS 浏览器
                </div>
                <div className="des">
                  ENS（EOS Name Serve）是一个去中心化的 DNS 雏形。当网站拥有者将 EOS 账号和网站 URL 或者 IP 地址绑定后，用户就可以直接通过 EOS 账号访问对应的网站。
                </div>
                  <Search
                    placeholder="输入 EOS 账号"
                    enterButton
                    size="large"
                    onSearch={value => console.log(value)}
                    style={{marginTop:'45px',width:'365px'}}
                  />
              </div>
            </Col>
          </Row>
        </section>
        
      )
    }
}

export default CardBrowser
  