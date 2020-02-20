import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

class Entries extends Component {
    state = {
        entries: []
    };

    componentDidMount() { 
      axios
        .get('/budget/entries.json').then(res => {
            const entries = res.data;
            this.setState({ entries });
        })
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
            </tbody>
        </Table>
        )
    };
}

export default Entries;
