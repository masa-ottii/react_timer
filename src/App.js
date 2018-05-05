import React from 'react';
import TimerButton from './TimerButton';
import ContextMenu from './ContextMenu';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            remaintime: 0
        };
    }
    componentDidMount(){
    }

    componentWillUnmount(){
        clearInterval(this.timerId);
    }
    
    setRemainTime(time){
        this.setState({
            remaintime: 60 * time
         });
    }

    startTimer(){
        if(this.state.remaintime > 0){
            this.timerId = setInterval(()=>this.tick(),1000);
        }
    }
    
    stopTimer(){
        clearInterval(this.timerId);
    }
    
    resetTimer(){
        this.setState({remaintime: 0, endtime: 0});
        clearInterval(this.timerId);
    }
    
    tick(){
        if(this.state.remaintime > 0){
            this.setState({remaintime: this.state.remaintime - 1 });
        } else {
            clearInterval(this.timerId);            
        }
    }

    format2(value){
        return ("00" + value).substr(-2) 
    }

    render(){
        return (
            <div id="main-box" className="box">
                <div>
                    <i id="hour-glass" className="fas fa-hourglass-half is-size-1" ></i>
                </div>
                <div className="vertical-center">
                    <span id="display-board">
                        {this.format2(Math.floor(this.state.remaintime/60))}:
                        {this.format2(this.state.remaintime%60)}:00
                    </span>
                    <a className="button is-white">
                        <i className="far fa-clock"></i>
                        <ContextMenu select={(time)=>this.setRemainTime(time)} />
                    </a>
                </div>
                <TimerButton start={()=>this.startTimer()} stop={()=>this.stopTimer()} reset={()=>this.resetTimer()}/>
            </div>
        )
    }
}
