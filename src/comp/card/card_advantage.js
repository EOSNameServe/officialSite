import React, { Component } from 'react';
import { Row, Col } from 'antd';

class CardAdvantage extends Component {
    render () {
      return (
        <section className="background background_light">
          <div class="advantage_container">
            <div className="title text-center mb60">ENS 的优势</div>
            <Row>
              <Col span={6} offset={4}>
                <div className="advantage_block">
                  <figure>
                    <img src={require('./../../img/advantage_img1.png')} alt=""></img>
                  </figure>
                  <div className="title">
                    去中心化
                  </div>
                  <div className="des">
                    ENS 是基于 EOS 运行的合约，天然带有去中心化的优势，再绑定 IP 后，站长再也不用担心 DNS 劫持带来的烦恼。同时，由于 EOS 的特点，账号的拥有者可以随时更换绑定 IP 。
                  </div>
                </div>
                <div className="advantage_block">
                  <figure>
                    <img src={require('./../../img/advantage_img1.png')} alt=""></img>
                  </figure>
                  <div className="title">
                    低廉的维护费用
                  </div>
                  <div className="des">
                    只需要拥有一个 EOS 账号即可，不再需要因为高额的域名费用而纠结。
                  </div>
                </div>
              </Col>
              <Col span={8} offset={2}>
                <div className="advantage_block">
                  <figure>
                    <img src={require('./../../img/advantage_img1.png')} alt=""></img>
                  </figure>
                  <div className="title">
                    每秒 3900 多的 TPS
                  </div>
                  <div className="des">
                    极高的 TPS 保证了 ENS 解析的速度。给你毫秒级的解析速度，无缝浏览 EOS 上的 DAPP 的体验。
                  </div>
                </div>
                <div className="advantage_block">
                  <figure>
                    <img src={require('./../../img/advantage_img1.png')} alt=""></img>
                  </figure>
                  <div className="title">
                    简单好用的绑定和浏览
                  </div>
                  <div className="des">
                    用户可以通过 Scatter，Tokenpocket 等等主流的钱包，进行绑定，同时通过各个平台的插件或者入口进行访问。
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      )
    }
}

export default CardAdvantage
  