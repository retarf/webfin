import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import MonthForm from './MonthForm.js';

// | Incomes | Outcomes | Balance |

class MainMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            month: '',
        };
    };

    render() {
        return (
            <Navbar fixed="top" bg="dark" variant="dark">
                <Nav className="mr-auto">
                    <Nav.Link href="#incomes">Incomes</Nav.Link>
                    <Nav.Link href="#outcomes">Outcomes</Nav.Link>
                    <Nav.Link href="#balance">Balance</Nav.Link>
                </Nav>
                <MonthForm 
                    setMonth = { this.props.setMonth }
                />
            </Navbar>
        )
    };
};

export default MainMenu;
