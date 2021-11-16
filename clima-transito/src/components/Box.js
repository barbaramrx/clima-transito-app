import React from 'react';

import './components.css';

class Box extends React.Component {
  render() {
    const { searchType } = this.props;

    return (
      <>
        <h1>{searchType}</h1>
      </>
    );
  }
}

export default Box;
