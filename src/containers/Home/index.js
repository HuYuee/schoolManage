import React, {Component} from "react";
import Mychart from 'components/Mychart';
import { Card, Col, Row } from 'antd';
import TitleSplit from 'components/TitleSplit';
import './index.less'

export default class Home extends Component{
    render(){
        return (
            <div className="home">
              <div className="home_content">
                <TitleSplit>昨日运营数据</TitleSplit>
                <div>
                  <Row gutter={16}>
                    <Col span={8}>
                      <Card title="Card title" bordered={false}>Card content</Card>
                    </Col>
                    <Col span={8}>
                      <Card title="Card title" bordered={false}>Card content</Card>
                    </Col>
                    <Col span={8}>
                      <Card title="Card title" bordered={false}>Card content</Card>
                    </Col>
                  </Row>
                </div>
              </div>
              <div className="home_content">
                <TitleSplit>经营趋势图</TitleSplit>
                <Mychart/>
              </div>
            </div>
        )
    }
}; 
