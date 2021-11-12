import React from 'react';
// import { withRouter } from 'react-router-dom';

import './components.css';

import { Row } from 'antd';

class Options extends React.Component {
  render() {
    return (
      <Row className="options-box" justify="center" align="center">
        <p>Por Região / Por Linha / Por Parada</p>
      </Row>
    );
  }
}

export default Options;
