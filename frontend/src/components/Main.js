import React, { Component } from 'react';
import Footer from './Footer.js';
import { Jumbotron, Row, Col } from 'react-bootstrap';
import MainMenu from './MainMenu.js';
import EntryMenu from './EntryMenu.js';
import Entry from './Entry.js';
import EntryModal from './EntryModal.js';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            month: '',
            modalState: false,
            modalType: null,
            flow: 'outcome',
        };
    };

    setMonth = newMonth => {
        this.setState({ month: newMonth });
        this.getMonth(newMonth);
    };

    toggleModal = (type) => {
        let modalType = type;
        this.setState(
            {
                modalType: modalType,
                modalState: !this.state.modalState,
            }
        );
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
                <EntryModal
                    show = { this.state.modalState }
                    onHide = {() => this.toggleModal(null) }
                    animation = { true }
                    type = { this.state.modalType }
                    month = { this.state.month }
                />
                <Jumbotron fluid>
                    <Row>
                        <Col lg={2}>
                            <EntryMenu 
                                toggleModal = { this.toggleModal }
                            />
                        </Col>
                        <Col lg={9}>
                            <Entry 
                                month = { this.state.month }
                            />
                        </Col>
                    </Row>
                </Jumbotron>
            </div>
        );
    }
}

export default Main;
