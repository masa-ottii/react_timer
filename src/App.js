import React from 'react';
import TimerButton from './TimerButton';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            remaintime: 0,
            endtime: 0
        };
    }
    componentDidMount(){
    }
    componentWillUnmount(){
        clearInterval(this.timerId);
    }
    startTimer(){
        this.setState({
            remaintime: 60 * this.props.time,
            endtime: Date.now() + (1000 * 60 * this.props.time)
         });
        this.timerId = setInterval(
            ()=> this.tick()
            ,1000);
    }
    stopTimer(){
        clearInterval(this.timerId);
    }
    tick(){
        this.setState({remaintime: Math.round((this.state.endtime - Date.now())/1000) });
    }
    format2(value){
        return ("00" + value).substr(-2) 
    }
    render(){
        return (
            <div id="main-box" className="box">
                <div>
                    <i id="hour-glass" className="fas fa-hourglass-half is-size-1" ></i>
                    <p>
                        {this.state.remaintime}
                    </p>
                </div>
                <div>
                    <span id="display-board">
                        {this.format2(Math.floor(this.state.remaintime/60))}:
                        {this.format2(this.state.remaintime%60)}:00
                    </span>
                </div>
                <TimerButton start={()=>this.startTimer()} stop={()=>this.stopTimer()}/>
            </div>
        )
    }
}
