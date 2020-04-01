import React, { Component } from 'react';
import Entry from './Entry.js';
import EntryMenu from './EntryMenu.js';
import { Container, Row, Col } from 'react-bootstrap';

class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {
            month: '',
        };
    };

    render() {
        console.log( 'Content:', this.props.month );
        return (
              <Row>
                <Col lg={2}><EntryMenu /></Col>
                <Col lg={9}>
                    <Entry 
                        month = { this.props.month }
                    />
                </Col>
              </Row>
        );
    }
}

export default Content;
