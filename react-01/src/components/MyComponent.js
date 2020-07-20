import React from 'react';

class MyComp extends React.Component {
    render() {
            return (
                <div>
                    <h1>{this.props.whatToSay}</h1>
                    <h1>Hello World from MyComp</h1>
                    <button onClick={this.props.onPushMe}>Push Me</button>
                </div>
            )
        }
} 
export default MyComp;
