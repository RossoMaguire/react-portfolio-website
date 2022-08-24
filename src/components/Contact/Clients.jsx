import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ClientThumb from '../Image/ClientThumb';
import { clientData } from '../../content/data';

const Clients = () => {
  return (
    <div className="clients-wrapper">
      {clientData.map((client) => {
        return (
          <Row key={`client-${client.alt1}`}>
            <Col md={4} sm={12}>
              <ClientThumb alt={client.alt1} filename={client.src1} />
            </Col>
            <Col md={4} sm={12}>
              <ClientThumb alt={client.alt2} filename={client.src2} />
            </Col>
            <Col md={4} sm={12}>
              <ClientThumb alt={client.alt3} filename={client.src3} />
            </Col>
          </Row>
        );
      })}
    </div>
  );
};

export default Clients;
