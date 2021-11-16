import React from 'react';
// import { withRouter } from 'react-router-dom';

import './Home.css';

import Options from '../../components/Options.js';
import { Row, Image } from 'antd';

class Home extends React.Component {
  render() {
    return (
      <>
        <Row className="main" justify="center" align="center">
          {/* <Image src="../../assets/logo_white.png"></Image> */}
          <Options />
        </Row>
      </>
    );
  }
}

export default Home;
