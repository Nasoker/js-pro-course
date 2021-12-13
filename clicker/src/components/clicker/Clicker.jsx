import React from "react";

import "./Clicker.scss";

export class Clicker extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            count : 0,
        }
    }
    handleClick(arg,e){
        e.preventDefault();
        this.setState(prevState => ({count: prevState.count + arg}));
    }
    refresh (e){
        e.preventDefault();
        this.setState(({count: 0}));
    }
    render(){
        return(
            <div className="clicker">
                <span className="counter">{this.state.count}</span>
                <div className="buttons">
                <button onClick={(e)=>{this.handleClick(+1,e)}}>+</button>
                <button onClick={(e)=>{this.refresh(e)}}>⟳</button>
                <button onClick={(e)=>{this.handleClick(-1,e)}}>-</button>
                </div>
            </div>
        )
    }
}