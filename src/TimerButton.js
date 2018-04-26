import React from 'react';

export default class TimerButton extends React.Component {
    render(){
        return (
            <div>
                <a className="button is-info" onClick={this.props.start}>START!</a>
                <a className="button is-danger" onClick={this.props.stop}>STOP!</a>
            </div>
        )
    }
}