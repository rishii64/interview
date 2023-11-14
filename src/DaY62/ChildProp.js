import React, { Component } from 'react'

export default class ChildProp extends Component {
    constructor(props){
        super(props)
        this.state ={
            val : this.props.value
        }
    }
  render() {
    return (
      <>
        <h2>Props Value : {this.state.val}</h2>
        <button onClick={()=> this.setState({val : this.state.val+1})}>Increase</button>
      </>
    )
  }
}
