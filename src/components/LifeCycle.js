import React from "react";
class LifeCycle extends React.Component{
    
    constructor(props)
    {
        super(props);
       this.state={str:"god is greate!!"}
    }
    componentWillMount()
    {
        console.log("will mount")
    }
    componentDidMount()
    {
        console.log("did mount")
    }
    componentDidUpdate()
    {
        console.log("did update");
    }
    shouldComponentUpdate()
    {   console.log("should update")
        return true;
    }
    componentWillUnmount()
    {
        console.log("un mount")
    }

    changeState(){
        this.setState({str:"belive in yourself"})
    }
    render()
    {
        return(<>
        <h1>this is life cycle</h1>
        <h2>{this.state.str}</h2>
     <a onClick={this.changeState.bind(this)} href> click</a>
       

        </>)
    }

}
export default LifeCycle;