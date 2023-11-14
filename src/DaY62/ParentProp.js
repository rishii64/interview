import React, { Component } from 'react'
import ChildProp from './ChildProp'

export default class ParentProp extends Component {
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }
  render() {
    return (
      <>
       <ChildProp value = {this.state.count} />
      </>
    )
  }
}
