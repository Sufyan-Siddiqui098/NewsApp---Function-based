import React, { Component } from 'react'
import loading from "./Images/loadingSpinner.gif"

export default class Spinner extends Component {
  render() {
    return (
      <div style={{margin: "1em 0"}}>
        <img src={loading} style={{width: "80%"}} alt="Loading" />
      </div>
    )
  }
}
