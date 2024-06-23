import React, { Component } from 'react'
import loading from './loading.gif.gif';


// The spinner for loading which can be implemented using loading.gif

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={loading} alt = ""></img>
      </div>
    )
  }
}

export default Spinner
