import React, { Component } from 'react';
import axios from 'axios';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import EntryList from './EntryList.js';
import EntryForm from './EntryForm.js';

class Entry extends Component { 

    constructor (props) {
        super(props);
        this.state = {
            list: [],
            month: '',
        };

        this.getData.bind(this);
        this.addEntry.bind(this);
    };

    componentDidMount() {
        let month = this.props.month;
        if (month !== '') {
            this.getData(month);
        };
    };

    componentDidUpdate(prevProps) {
        let month = this.props.month;
        if (prevProps.month !== month) {
            this.getData(month);
            this.setState({ month: month });
        };
    };

    getData(newMonth) {
        let month = newMonth;
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

    render() {
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
