import React, { Component } from 'react';
import Entries from './models/Entries.js';
import Entry from './models/Entry.js';
import { Container, Row, Col } from 'react-bootstrap'

class Content extends Component {
    render() {
        return (
            <Container>
              <Row>
                <Col xs={1}>1 of 2</Col>
                <Col xs={5}><Entries /></Col>
                <Col xs={5}><Entry /></Col>
              </Row>
            </Container>
        );
    }
}

export default Content;
