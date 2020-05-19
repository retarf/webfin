import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import MainMenu from './MainMenu.js';
import Entry from './Entry.js';

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

    getMonth = () => {
        return this.state.month;
    };


    render() {
        return (
            <Jumbotron fluid>
                <MainMenu 
                    setMonth = { this.setMonth }
                    month = { this.state.month }
                />
                <Entry 
                    month = { this.state.month }
                />
            </Jumbotron>
        );
    }
}

export default Main;
