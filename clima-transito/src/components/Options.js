import React from 'react';
// import { withRouter } from 'react-router-dom';

import './components.css';

import { Row } from 'antd';
import { Icon } from '@iconify/react';
import bxBus from '@iconify-icons/bx/bx-bus';

class Options extends React.Component {
  render() {
    return (
      <Row className="options-box" justify="center" align="center">
        <Icon
          icon={bxBus}
          style={{ fontSize: '24px', color: '#1a6489', marginRight: '2rem' }}
        />
        <a className="options-item" href="#/encontre-por-regiao">
          Por região
        </a>
        <p className="options-bar">/</p>
        <a className="options-item" href="#/encontre-por-linha">
          Por linha
        </a>
        <p className="options-bar">/</p>
        <a className="options-item" href="#/encontre-por-endereco">
          Por endereço
        </a>
      </Row>
    );
  }
}

export default Options;
