import React, { Component } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

class EntryMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };

    };

    redirect = () => {
        var item = window.location.hash;
        if (item === '#add') {
            this.props.toggleModal('ADD');
        }
    }

    render() {
        return (
            <Navbar bg="dark" variant="dark" > 
                <Nav className="flex-sm-column" >
                    <Nav.Item >
                        <Nav.Link href="#add" onClick={ () => this.redirect() }>Add</Nav.Link>
                    </Nav.Item >
                    <Nav.Item >
                        <Nav.Link href="#">Update</Nav.Link>
                    </Nav.Item >
                    <Nav.Item >
                        <Nav.Link href="#">Remove</Nav.Link>
                    </Nav.Item >
                </Nav >
            </Navbar >
        )
    };
};

export default EntryMenu;
