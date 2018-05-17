import React, {Component} from "react";

import './index.less'

const TitleSplit =(props)=>{
    return (
      <div className="title">
        <span className="title_span"></span>
        <div className="title_split">{props.children}</div>
      </div>
    )
  }
export default TitleSplit;