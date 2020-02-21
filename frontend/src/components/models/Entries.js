import React, { Component } from 'react';
import axios from 'axios';
import { Table, Form } from 'react-bootstrap';

class Entries extends Component {
    state = {
        entries: [],
        entry: '',
    };

    componentDidMount() { 
      axios
        .get('/budget/entries.json').then(res => {
            const entries = res.data;
            this.setState({ entries });
        })
    };

    get_sum() {
        let total = 0;
        let entries = this.state.entries;
        for (let i = 0; i < entries.length; i++) {
            total += entries[i].value;
        }
        return total.toFixed(2);
    };

    handleChange = event => {
        this.setState({ entry: event.target.value });
    };


  render() {
      return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Miesiąc:</th>
                    <th>Nazwa:</th>
                    <th>Opis:</th>
                    <th>Wartość:</th>
                </tr>
            </thead>
            <tbody>
            { this.state.entries.map(entry => 
                <tr>
                    <td>{entry.month}</td>
                    <td>{entry.name}</td>
                    <td>{entry.description}</td>
                    <td>{entry.value}</td>
                </tr>
            )}
                <tr><td colSpan="3">SUMA:</td><td>{this.get_sum()}</td></tr>
            </tbody>
        </Table>
        )
    };
}

export default Entries;
