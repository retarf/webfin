import React, { Component } from 'react';
import Entry from './Entry.js';
import EntryMenu from './EntryMenu.js';
import { Container, Row, Col } from 'react-bootstrap';

class Content extends Component {


            ///<Container>
            ///</Container>
    render() {
        return (
              <Row>
                <Col lg={2}><EntryMenu /></Col>
                <Col lg={9}><Entry /></Col>
              </Row>
        );
    }
}

export default Content;
