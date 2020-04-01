import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import { Container, Jumbotron, Row, Col } from 'react-bootstrap';
import MainMenu from './MainMenu.js';
import EntryMenu from './EntryMenu.js';
import Entry from './Entry.js';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            month: '',
        };
    };

    setMonth = newMonth => {
        this.setState({ month: newMonth });
        this.getMonth(newMonth);
    };

    getMonth = () => {
        return this.state.month;
    };


    render() {
        console.log( 'Main:', this.state.month );
        return (
            <div>
                <MainMenu 
                    setMonth = { this.setMonth }
                />
                <Jumbotron fluid>
                    <Row>
                        <Col lg={2}>
                            <EntryMenu />
                        </Col>
                        <Col lg={9}>
                            <Entry 
                                month = { this.state.month }
                            />
                        </Col>
                    </Row>
                </Jumbotron>
                <Footer />
            </div>
        );
    }
}

export default Main;
