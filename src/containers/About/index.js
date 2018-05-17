import React, {Component} from "react";
import MyTree from 'components/MyTree';
import TitleSplit from 'components/TitleSplit';
import './index.less'

export default class About extends Component{
    render(){
        return (
            <div className="about">
                <TitleSplit>table</TitleSplit>
              <MyTree/>
            </div>
        )
    }
}; 
