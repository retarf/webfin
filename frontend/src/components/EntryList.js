import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class EntryList extends Component {

    constructor(props) { 
        super(props);
        this.state = {
            list: [],
        };
        this.getSum.bind(this);
    };

    componentDidMount() {
        const data = this.props.entries;
        this.setState({ list: data });
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
