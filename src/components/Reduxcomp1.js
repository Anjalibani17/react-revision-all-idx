import React, { Component} from 'react';
import { incrementAction } from '../redux/actions/action';
import { connect } from 'react-redux';
class ReduxComp1 extends Component {
    constructor(props)
    {
        super(props);
        this.state={counter:0}
    }
    handleClick=()=>{
        this.setState((prevState)=>{
            return{counter:prevState.counter+1}
        })
        this.props.incrementAction(this.state.counter)
    }
    render() {
        return (
            <div>
                <h1>compo::1</h1>
                <h2>{this.state.counter}</h2>
                <button onClick={this.handleClick}>click</button>
            </div>
        );
    }
}
export default connect(null,{incrementAction})(ReduxComp1);
