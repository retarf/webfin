import React, { Component } from 'react';
import Content from './Content.js';
import Header from './Header.js';
import Footer from './Footer.js';
import { Container, Jumbotron } from 'react-bootstrap';
import MainMenu from './MainMenu.js';

class Main extends Component {
    render() {
                //<Header />
        return (
            <div>
                <MainMenu />
                <Jumbotron fluid>
                    <Content />
                </Jumbotron>
                <Footer />
            </div>
        );
    }
}

export default Main;
