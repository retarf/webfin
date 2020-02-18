import React, { Component } from 'react';
import Content from './Content.js';
import Header from './Header.js';
import Footer from './Footer.js';

class Main extends Component {
    render() {
        return (
            <div> 
                <Header />
                <Content />
                <Footer />
            </div>
        );
    }
}

export default Main;
