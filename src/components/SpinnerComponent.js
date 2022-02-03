import React, { Component } from "react";
import loading from "../loading.gif";
export default class SpinnerComponent extends Component {
  render() {
    return (
      <div className='text-center spinner'>
        <img src={loading} alt='loading' />
      </div>
    );
  }
}
