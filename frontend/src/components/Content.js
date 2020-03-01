import React, { Component } from 'react';
import Entry from './Entry.js';
import { Container, Row, Col } from 'react-bootstrap'

class Content extends Component {


    render() {
        return (
            <Container>
              <Row>
                <Col xs={1}>1 of 2</Col>
                <Col xs={10}><Entry /></Col>
              </Row>
            </Container>
        );
    }
}

export default Content;
