import React from 'react';
import ReactDOM from 'react-dom';

class Loader extends React.component {
  render() {
    return (
    <div className={"loader " + (this.props.paging ? "active" : "")}>
      <img src="/svg/loader.svg" />
      </div>
    )
  }
}

export default Loader;
