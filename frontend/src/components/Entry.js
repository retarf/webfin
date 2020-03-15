import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import EntryList from './EntryList.js';
import EntryForm from './EntryForm.js';
import MonthForm from './MonthForm.js';

class Entry extends Component { 

    constructor () {
        super();
        this.state = {
            list: [],
            month: '',
        }
    };

    componentDidMount() { 
    };

    getData = month => {
        let baseUrl = '/budget/entries.json';
        let url = '';
        if (month === '') {
            url = baseUrl;
        } 
        else
        {
            let filter = '?month=' + month;
            url = baseUrl.concat(filter);
        };

        axios
            .get(url).then(res => {
                const entryList = res.data;
                this.setState({ list: entryList });
        });
    };

    addEntry = newEntry => {
        let { list } = this.state;
        list.push(newEntry);
        this.setState({ list: list });
    };

    setMonth = month => {
        this.getData(month);
        this.setState({ month: month });
    };

    render() {
        return (
            <Container>
                <MonthForm setMonth = { this.setMonth } />
                <Row>
                    <Col xs={5}><EntryList 
                        entries = { this.state.list } 
                    /></Col>
                    <Col xs={5}><EntryForm 
                        addEntry = { this.addEntry } 
                        month = { this.state.month }
                    /></Col>
                </Row>
            </Container>
        )};

}

export default Entry;
