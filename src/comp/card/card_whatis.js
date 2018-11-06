import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Input } from 'antd';

const Search = Input.Search;

class Cardwhat extends Component {
    render () {
      return (
        <section className="background background_dark">
         <Row>
          <Col md={{ span: 8, offset: 4 }}  xs={{ span: 18, offset: 2 }}>
            <div className="container">
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
          <Col md={{ span: 8, offset: 4 }}  xs={{ span: 18, offset: 2 }}>
            <figure className="container">
              <img className="img_whatIsENS" src={require('./../../img/whatisens.png')} alt="what is ENS"/>
            </figure>
          </Col>
        </Row>
          
          
          
          
        </section>
      )
    }
}

export default Cardwhat
  