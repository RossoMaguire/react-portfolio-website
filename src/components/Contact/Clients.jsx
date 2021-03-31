import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ClientImg from '../Image/ClientImg';
import { clientData } from '../../mock/data';

const Clients = () => {
  return (
    <div className="clients-wrapper">
      {clientData.map((client) => {
        return (
          <Row>
            <Col md={4} sm={12}>
              <ClientImg alt={client.alt1} filename={client.src1} />
            </Col>
            <Col md={4} sm={12}>
              <ClientImg alt={client.alt2} filename={client.src2} />
            </Col>
            <Col md={4} sm={12}>
              <ClientImg alt={client.alt3} filename={client.src3} />
            </Col>
          </Row>
        );
      })}
    </div>
  );
};

export default Clients;
