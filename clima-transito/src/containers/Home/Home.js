import React from 'react';
// import { withRouter } from 'react-router-dom';

import './Home.css';

import { Row, Image } from 'antd';

class Home extends React.Component {
  render() {
    return (
      <Row className="main" justify="center" align="center">
        <Image src="../../assets/logo_white.png"></Image>
      </Row>
    );
  }
}

export default Home;
