import React from 'react';

// import Options from './Options';
import ApiService from '../service/ApiService.js';

import './components.css';
import 'antd/dist/antd.css';
import logo from '../assets/logo_white.png';
import { PageHeader, Tag } from 'antd';

import { Alert, Input, Row } from 'antd';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { Icon } from '@iconify/react';
import bxBus from '@iconify-icons/bx/bx-bus';

const { Search } = Input;

const antIcon = <LoadingOutlined style={{ fontSize: 32 }} spin />;
class Box extends React.Component {
  state = {
    busList: undefined,
    renderingList: false,
    errorAlert: false,
  };

  constructor() {
    super();
    this.service = new ApiService();
  }

  onSearch = parameter => {
    this.setState({
      errorAlert: false,
      busList: undefined,
      renderingList: true,
    });

    this.service
      .getStop(parameter)
      .then(response => {
        this.setState({
          busList: response.data,
          renderingList: false,
        });
      })
      .catch(err => {
        console.log('err', err);
        this.setState({
          errorAlert: true,
          renderingList: false,
          busList: true,
        });
      });
  };

  render() {
    const { title, subtitle } = this.props;
    const { busList, renderingList, errorAlert } = this.state;

    return (
      <>
        <Row justify="center" align="center" style={{ marginTop: '20px' }}>
          <img src={logo} style={{ maxWidth: '150px' }} alt="logo" />
        </Row>
        <div className="box-container">
          <Row
            className="options-box"
            justify="center"
            align="center"
            style={{ flexDirection: 'row' }}
          >
            <Icon
              icon={bxBus}
              style={{
                fontSize: '24px',
                color: '#1a6489',
                marginRight: '1rem',
              }}
            />
            <Search
              placeholder="Procure por seu ônibus ou ponto"
              allowClear
              onSearch={e => this.onSearch(e)}
              style={{ width: 400 }}
              className="search-bar"
            />
          </Row>
          <div className="box-component">
            <PageHeader
              className="site-page-header"
              onBack={() => window.history.back()}
              title={title}
              subTitle={subtitle}
            >
              <Tag color="red">Guarda-chuva</Tag>
              <Tag color="blue">Nublado</Tag>
              <Tag color="green">Céu limpo</Tag>
            </PageHeader>
            <div className="box-list">
              {busList ? (
                <>
                  {errorAlert ? (
                    <>
                      <Alert
                        style={{ margin: '5px' }}
                        message="Atenção!"
                        description="Não existem paradas, endereços ou ônibus com o termo buscado."
                        type="error"
                        showIcon
                      />
                    </>
                  ) : (
                    <div
                      className="box-list-inside"
                      style={{ padding: '2rem' }}
                    >
                      {busList.map(bus => {
                        return (
                          <Row
                            className="box-row"
                            style={{ marginBottom: '5px' }}
                          >
                            <Icon
                              icon={bxBus}
                              className="bus-icon"
                              style={{
                                fontSize: '24px',
                                color: '#1a6489',
                                marginRight: '20px',
                              }}
                            />
                            <p
                              className="stop-name"
                              style={{ marginBottom: 0 }}
                            >
                              {bus.nome_parada}
                            </p>
                            <Tag
                              color={bus.resumo === 'Nublado' ? 'blue' : 'red'}
                              style={{ marginLeft: '5px' }}
                            >
                              {bus.resumo}
                            </Tag>
                          </Row>
                        );
                      })}
                    </div>
                  )}
                </>
              ) : (
                <>
                  {renderingList ? (
                    <Row
                      justify="center"
                      align="center"
                      style={{ padding: '2rem' }}
                    >
                      <Spin indicator={antIcon} />
                    </Row>
                  ) : (
                    <Row style={{ padding: '2rem' }}>
                      <Alert
                        style={{ margin: '5px' }}
                        message="Atenção!"
                        description="Cuidado: se você fizer a busca de uma linha de ônibus, e
                        não de uma parada ou endereço específico, iremos
                        informar todas as paradas desta linha e a busca pode
                        demorar um pouquinho."
                        type="warning"
                        showIcon
                      />
                    </Row>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Box;
