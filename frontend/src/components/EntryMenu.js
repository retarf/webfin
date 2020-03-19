import React, { Component } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

class EntryMenu extends Component {

    render() {
        return (
            <Navbar bg="dark" variant="dark" > 
                <Nav className="flex-sm-column" >
                    <Nav.Item >
                        <Nav.Link href="#">Add</Nav.Link>
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
