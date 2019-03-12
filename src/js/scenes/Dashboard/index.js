import React, { Component } from 'react';
import {
  Row, Col, Input
} from 'reactstrap';

class Dashboard extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm={6} md={3}>
            <div className="bg-danger theme-color rounded mb-3" style={{ paddingTop: '75%' }} />
          </Col>
          <Col sm={6} md={3}>
            <div className="bg-primary theme-color rounded mb-3" style={{ paddingTop: '75%' }} />
          </Col>
          <Col sm={6} md={3}>
            <div className="bg-dark theme-color rounded mb-3" style={{ paddingTop: '75%' }} />
          </Col>
          <Col sm={6} md={3}>
            <div className="bg-success theme-color rounded mb-3" style={{ paddingTop: '75%' }} />
          </Col>
        </Row>
        <Input
          type="textarea"
          rows={10}
          placeholder="Input text..."
        />
      </div>
    );
  }
}

export default Dashboard;
