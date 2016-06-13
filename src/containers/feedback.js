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