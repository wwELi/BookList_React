"use strict"

import React from "react";
import {render,findDOMNode} from "react-dom";
import {Link} from "react-router";
import searchImg from "../images/search.png"

export class HeaderTop extends React.Component{
    constructor(){
		super();
		this.state={
			content:"1231"	
		}
		this.isShow = false;
	}
    
    searchList(){
    	console.log("begin search----");
    	let ele = findDOMNode(this.refs.inputSearch);
        this.isShow ? (ele.style.display="none") : (ele.style.display="");
        this.isShow = !this.isShow;
    }

    showContent(evet){
        let value = evet.target.value;
        this.props.contentValue(value);
    }

	render(){
		return <div className="header_public">
		<span>{this.props.name}</span>
        <img src={searchImg} style={{float:"right",marginRight:"50px",width:"40px",height:"40px"}} onClick={()=>this.searchList()} />
		<input onChange={(evet)=>this.showContent(evet)} ref="inputSearch" style={{width:"150px",height:"20px",float:"right",marginRight:"40px",marginTop:"8px",display:"none"}}/>
		</div>
	}
}