"use strict";

import React from 'react';
import {render,findDOMNode} from  "react-dom";
import {Link} from "react-router";



export class Search extends React.Component{
	constructor(){
		super();
		this.state={
			content:"1231"	
		}
		this.isShow = true;
	}
    setInputValue(evet){
    	console.log("++++++++",evet)
        this.setState({content:evet.target.value})
    }
    handlerClick(){
       let ele = findDOMNode(this.refs.content);
       console.log(ele,'============');
       this.isShow?ele.style.display="none":ele.style.display="inline";
       this.isShow = !this.isShow;

    }
	render(){
		return (<div>
		         <input  onChange={(evet)=>this.setInputValue(evet)}  style={{width:'100%',background:"#FFF",height:"40px",marginTop:"44px"}}/>
	             <span ref='content'>{this.state.content}</span>
	             <button onClick={()=>this.handlerClick()}>click to hide or show ------0</button>
	             <Link to="/">hhhhh</Link>
	            </div>
	)}
}
