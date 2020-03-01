import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

class EntryList extends Component {
    state = {
        list: [],
    };

    componentDidMount() {
        const data = this.props.entries;
        this.setState({ list: data });
        console.log(this);
    };

    getSum() {
        let total = 0;
        let entries = this.props.entries;
        for (let i = 0; i < entries.length; i++) {
            total += entries[i].value;
        }
        return total.toFixed(2);
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
            { this.props.entries.map(entry => 
                <tr>
                    <td>{entry.month}</td>
                    <td>{entry.name}</td>
                    <td>{entry.description}</td>
                    <td>{entry.value}</td>
                </tr>
            )}
                <tr><td colSpan="3">SUMA:</td><td>{this.getSum()}</td></tr>
            </tbody>
        </Table>
        )
    };
}

export default EntryList;
