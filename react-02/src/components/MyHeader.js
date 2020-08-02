import React from 'react';
import logo1 from '../assets/React.svg';
import logo2 from '../assets/TicTacToe.svg';
import logo3 from '../assets/Money.svg';
import logo4 from '../assets/Cities.svg';
import logo5 from '../assets/Linked.svg';
import logo6 from '../assets/Stack.svg';

class MyHeader extends React.Component {
    
    render() {
        return (
            <div className="container space-around" onClick={(e) => this.props.handleClick(e.target.getAttribute("value"))}>
                <img src={logo1} className="App-logo" alt="react logo" value='React'/>
                <img src={logo2} className="App-logo" alt="tic tac toe icon" value='Tictactoe'/>
                <img src={logo3} className="App-logo" alt="paper bill icon" value='Banking App'/>
                <img src={logo4} className="App-logo" alt="city icon" value='Cities and Communities'/>
                <img src={logo5} className="App-logo" alt="node icon" value='Linked List'/>
                <img src={logo6} className="App-logo" alt="stack icon" value='Stacks'/>
            </div>
        )
    }
}

export default MyHeader;