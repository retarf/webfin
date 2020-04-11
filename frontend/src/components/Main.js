import React, { Component } from 'react';
import Footer from './Footer.js';
import { Jumbotron, Row, Col } from 'react-bootstrap';
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
                            <h1 className="text-center mt-4 mb-4">
                                Actual Month: { this.state.month}
                            </h1>
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
