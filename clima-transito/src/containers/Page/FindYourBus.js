import React from 'react';
// import { withRouter } from 'react-router-dom';

// import './FindYourBus.css';

import Box from '../../components/Box';

class FindYourBus extends React.Component {
  render() {
    return (
      <>
        <Box
          title="Procure por seu ponto ou linha de ônibus!"
          subtitle="Nós informamos pra você se o céu está limpo, se precisa de um guarda-chuva ou de um bote inflável."
        />
      </>
    );
  }
}

export default FindYourBus;
