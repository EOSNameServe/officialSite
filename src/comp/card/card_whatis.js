import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './../content/content.less'
import { Input } from 'antd';

const Search = Input.Search;

class Cardwhat extends Component {
    render () {
      return (
        <section className="background background_dark">
         <Row>
          <Col span={12}>
            <div className="block">
              <div className="title">
                什么是 ENS
              </div>

              <div className="des">
                ENS（EOS Name Serve）是一个去中心化的 DNS 雏形。
                当网站拥有者将 EOS 账号和网站 URL 或者 IP 地址绑定
                后，用户就可以直接通过 EOS 账号访问对应的网站。
              </div>

              <div>
                <Search
                  placeholder="http://"
                  enterButton="点击绑定"
                  size="large"
                  onSearch={value => console.log(value)}
                  style={{marginTop:'32px',backgroundColor:'#364f6b'}}
                />
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="block">
              <img className="img_whatIsENS" src={require('./../../img/whatisens.png')} alt="what is ENS"/>
            </div>
          </Col>
        </Row>
          
          
          
          
        </section>
      )
    }
}

export default Cardwhat
  