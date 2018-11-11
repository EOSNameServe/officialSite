import React, { Component } from 'react';
import { Row, Col } from 'antd';

class CardProject extends Component {
    render () {
      return (
        <section className="background background_light" id="project">
          <div className="project_container">
            <div className="title text-center mb60">项目结构及发展</div>
            <Row>
              <Col md={{ span: 20, offset: 4 }}  xs={{ span: 18, offset: 2 }}>
                <div className="structure">
                  <div className="line_outer">
                    <span className="line">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </div>
                  <div className="itemContainer">
                    <Item
                      imgUrl={require('./../../img/advantage_img1.png')}
                      title={'合约端'}
                      des={'用户 URL/IP 和 EOS 账号 信息存储，获取'}
                      />
                    <Item
                      imgUrl={require('./../../img/advantage_img1.png')}
                      title={'网站绑定端'}
                      des={'用户 URL/IP 和 EOS 账号 信息存储，获取'}
                      />
                    <Item
                      imgUrl={require('./../../img/advantage_img1.png')}
                      title={'用户浏览端'}
                      des={'用户 URL/IP 和 EOS 账号 信息存储，获取'}
                      />
                  </div>
                </div>
                <img className="progress" src={require('./../../img/project_img2.png')} alt=""></img>
              </Col>
            </Row>
            
          </div>
        </section>
        
      )
    }
}

const Item = (props) => {
  return (
    <div className="item">
      <figure>
        <img src={props.imgUrl} alt=""></img>
      </figure>
      <h4 className="title">{props.title}</h4>
      <div className="des">{props.des}</div>
    </div>
  )
}


export default CardProject
  