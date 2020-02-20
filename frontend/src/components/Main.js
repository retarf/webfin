import React, { Component } from 'react';
import Content from './Content.js';
import Header from './Header.js';
import Footer from './Footer.js';
import { Jumbotron } from 'react-bootstrap';

class Main extends Component {
    render() {
        return (
            <Jumbotron fluid>
                <Header />
                <Content />
                <Footer />
            </Jumbotron>
        );
    }
}

export default Main;
