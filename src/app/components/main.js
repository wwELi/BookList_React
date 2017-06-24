"use strict";

import React from "react";
import {render} from "react-dom";
import {Link} from "react-router"

import {HeaderTop} from './header';
import {List} from "./List"

import listData from "../resource/list.json"


console.log(listData,"---------------")
export class Main extends React.Component{
	constructor(){
		super();
		this.state={
			content:"",
			listBooks:listData	
		}
		window.sessionStorage.setItem("bookList",JSON.stringify(listData));
	}

	showContent(value){

		let arr = [];
        listData.map((item,index)=>{
           item.content.title.toUpperCase().indexOf(value.toUpperCase())!=-1&&arr.push(item);
        })
        this.setState({listBooks:arr})
	}

	render(){

		return(
               <div><HeaderTop name="BOOK LIST" contentValue={this.showContent.bind(this)}/>
              
                  <div>{this.state.content}</div>
                  <List listItem={this.state.listBooks} />
                  <Link to="/"　style={{position:"fixed",bottom:"20px",right:"20px"}}>
                    BACK TO　ＨＯＭＥ
                  </Link>
                 </div>

			)
	}
}
