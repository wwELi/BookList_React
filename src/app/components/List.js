"use strit";

import React from "react";
import {render} from "react-dom"
import {Link} from "react-router"


export class List extends React.Component{
	constructor(){
		super();
	}
	viewDetail(){

	}
    render(){

        const maps = this.props.listItem;  

        return(
             <div style={{marginTop:"40px"}}>
               {
                maps.length===0?(<div className="noSearch">no search...</div>):
               	maps.map((item,index)=>{
               	   return <div className="list" ref={index} onClick={()=>this.viewDetail()}>
               	              <img src={require("../images/"+item.name)}/>
               	              <div>
                                 <div>{item.content.title}</div>
                                 <div><span style={{display:"inline-block",width:"200px"}}>{item.content.desc}</span><Link className="goDetail" name="errt" to={"/detail"+index} /></div>
                                 <div>{item.content.price}</div>
               	              </div>
               	          </div>	
               	})
                
               }
             </div>)

   
    }	
}
