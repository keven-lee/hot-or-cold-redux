import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData } from '../actions/index';
var arr = [];


class GuessBar extends Component {
    constructor(props) {
        super(props);
        
        this.state = { term: '' };
        
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    
    onInputChange(event) {
        this.setState({ term: event.target.value });
    }
    
    onFormSubmit(event) {
        event.preventDefault();
        arr.push(this.state.term);
        console.log(arr);
        this.props.fetchData(this.state.term);
        this.setState({ term: '' });
    }
    
    render() {
        return (
        <div class='game'>    
        <h1>HOT or COLD</h1>    
        <h2 id="feedback">Make your Guess!</h2>
        <form onSubmit={this.onFormSubmit}>
            <input 
            type="text" 
            name="userGuess" 
            id="userGuess" 
            class="text" 
            maxlength="3" 
            autocomplete="off" placeholder="Enter your Guess" required
            value={this.state.term}
            onChange={this.onInputChange} 
            />
            <input 
            type="submit" 
            id="guessButton" 
            class="button" 
            name="submit" 
            value="Guess" 
            
            />
        </form>

        <p>Guess #<span id="count"></span>!</p>

        <ul 
        id="guessList" 
        class="guessBox clearfix">
        {arr}  
        </ul>
         
        <form onSubmit={this.onFormSubmit}>
        
            <input 
            type="submit" 
            id="guessButton" 
            class="button" 
            name="submit" 
            value="Check your score against others!" 
            
            />
        </form>    
            
        </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchData }, dispatch);
}

export default connect(null, mapDispatchToProps)(GuessBar);