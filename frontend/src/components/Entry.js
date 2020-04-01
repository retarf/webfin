import React, { Component } from 'react';
import axios from 'axios';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import EntryList from './EntryList.js';
import EntryForm from './EntryForm.js';
import MonthForm from './MonthForm.js';

class Entry extends Component { 

    constructor (props) {
        super(props);
        this.state = {
            list: [],
            month: '',
        };

        this.getData.bind(this);
        this.addEntry.bind(this);
        this.setMonth.bind(this);
    };

    componentDidMount() {
        this.getData();
    };

    getData() {
        let month = this.props.month;
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

    addEntry(newEntry) {
        let { list } = this.state;
        list.push(newEntry);
        this.setState({ list: list });
    };

    setMonth() {
        this.getData();
        this.setState({ month: this.props.month });
    };

    render() {
        console.log('Entry ', this.state.month);
        return (
            <Jumbotron fluid>
                <Container>
                    <Row>
                        <Col lg={5}><EntryList 
                            entries = { this.state.list } 
                        /></Col>
                        <Col lg={5}><EntryForm 
                            addEntry = { this.addEntry } 
                            month = { this.state.month }
                        /></Col>
                    </Row>
                </Container>
            </Jumbotron>
        )};

}

export default Entry;
