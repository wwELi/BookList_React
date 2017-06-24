"use strict";

import React from "react";
import {render,findDOMNode} from "react-dom";
import {Link} from "react-router"

import btn from "../images/add.png"

export class Detail extends React.Component{

	constructor(){
		super();

		let historyCommits = window.localStorage.getItem("historyCommits")||[];
		const data = window.sessionStorage.getItem("bookList");

		try{
			this.bookList = JSON.parse(data);
			historyCommits=JSON.parse(historyCommits);
     
		}catch(error){
			console.log("this is not json data",error)
		}

		this.state={
			commitList:historyCommits
		}
		
	}

	componentWillMount(o1,o2){
		const index = this.props.params.id||0;
		this.detail = this.bookList[parseInt(index)]

		console.log("---this is componentWillMount----",this.detail);
	}
	componentDidMount(o1,o2){
		this.refs.commit.style.display="none";
		console.log("---this is componentDidMount----");

	}

   addCommit(){
   	  const ele = this.refs.commit;
      ele.style.display === "none"?(ele.style.display = ""):"";
   }

	clickHander(){
      console.log("clickHander------");
	}
    add(){
    	const {commit,commitValue} = this.refs;
        commit.style.display ="none";
        commitValue.value&&this.state.commitList.unshift({value:commitValue.value,time:new Date().toLocaleString()})&&this.setState({commitList:this.state.commitList});
        window.localStorage.setItem("historyCommits",JSON.stringify(this.state.commitList));
        commitValue.value = "";
    }
	render(){
		console.log("---this is render----");
		return (<div className="detail">

                    <div className="detail_title">{this.detail.content.title}</div>
                    <div style={{padding:"20px"}}>
                        <img className="bg_img" src={require("../images/"+this.detail.name)} />
                    </div>
                    <div style={{border:"1px solid #d7d8d6",padding:"10px",display:"flex",justifyContent: 'space-between'}}>
                       <div>{this.detail.content.desc}</div>
                       <div onClick={()=>this.addCommit()} className="add_commit">add commit</div>
                    </div>
                  
                    <div ref="commit" style={{padding:"10px"}}>
                       <input ref="commitValue" style={{width:"200px",height:"20px"}}/>
                       <span onClick={(e)=>this.add(e)}>add</span>
                       <span onClick={()=>this.refs.commit.style.display="none"}>---------cancle</span>
                    </div>
                    <div style={{padding:"10px"}}>
               
                      {
                      	this.state.commitList.map((value)=>{
                      		return <div className="item_commit" style={{width:"100%"}}>
                      		          <div style={{fontSize:"30px",padding:"10px 0"}}>{value.value}</div>
                      		          <div>{value.time}</div>
                      		       </div>
                      	})
                      }
                    </div>
                    <Link className="back_list" to='/Search'>back to List</Link>

		       </div>)
	}

	componentWillReceiveProps(newPro){
        console.log("---this is componentWillReceiveProps----",newPro);
        
	}
	shouldComponentUpdate(newPro){
		console.log("---this is shouldComponentUpdate----",newPro);
		return true
	}

	componentWillUpdate(o1,o2){

         console.log("---this is componentWillUpdate----",o1,o2);
	}
	componentDidUpdate(o1,o2){
        console.log("---this is componentDidUpdate----",o1,o2);
	}
	componentWillUnmount(){
		console.log("---this is componentWillUnmount----");
	}
}