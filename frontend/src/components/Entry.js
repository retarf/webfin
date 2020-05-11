import React, { Component } from 'react';
import axios from 'axios';
import { Jumbotron, Button } from 'react-bootstrap';
import EntryList from './EntryList.js';
import EntryForm from './EntryForm.js';

class Entry extends Component { 

    constructor (props) {
        super(props);
        this.state = {
            list: [],
            month: '',
            showForm: false,
            formType: null,
        };

        this.getData.bind(this);
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
        let baseUrl = '/budget/entries/';
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

    addEntry = (newEntry) => {
        axios.post('budget/entries/', 
            { 
                month: newEntry.month,
                name: newEntry.name,
                description: newEntry.description,
                value: newEntry.value,
            }
            )
            .then(res => {
                console.log(res);
                console.log(res.data);
                newEntry.id = res.data.id;
            })

        let list = this.state.list;
        list.push(newEntry);
        this.setState({ list: list });
    };

    showForm = () => {
        this.setState({
            formType: "ADD",
            showForm: true,
        });
    };

    closeForm = () => {
        this.setState({
            showForm: false,
        });
    };

    render() {
        return (
            <Jumbotron>
                <h1 className="text-center">
                    Incomes:
                </h1>
                <EntryForm 
                    month = { this.state.month }
                    show = { this.state.showForm }
                    addEntry = { this.addEntry }
                    onHide = { this.closeForm }
                    type = { this.state.formType }
                />
                <EntryList 
                    entries = { this.state.list } 
                />
                <div className="text-right">
                    <Button variant="success"
                        onClick={ this.showForm }
                    >
                        Add Entry
                    </Button>
                </div>
            </Jumbotron>
        )};

}

export default Entry;

