import React, { Component } from 'react';
import About from "components/About/About";
import Intro from "components/Intro/Intro";

class AboutPage extends Component {

    render() {
        return (
            <div className="AboutContainer">
                <Intro animate />
                <About />
            </div>
        );
    }
}

export default AboutPage;
