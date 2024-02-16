import React, { Component } from "react";
import { connect } from "react-redux";

class ReduxComp2 extends Component {
    //   constructor(props) {
    //     super(props)
    //   }

    render() {
        return (
            <div>
                <h1>compo::2</h1>
                {console.log("this.props", this.props.counter.counter)}
                {/* <h2>{this.props.counte.cr}</h2> */}
                <h2>{this.props.counter.counter}</h2>
            </div>
        );
    }
}
const mapStateToProps = (counter) => {
    console.log(counter);
    return { counter };
};

export default connect(mapStateToProps)(ReduxComp2);
