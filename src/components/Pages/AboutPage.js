import React, { Component } from 'react';
import About from "components/About/About";
import FeedContainer from "components/Feed/FeedContainer";
import Intro from "components/Intro/Intro";

class AboutPage extends Component {

    render() {
        return (
            <div className="AboutContainer">
                {/* <Intro animate />
                <About /> */}
                <h2>
                    Latest Instagrams
                </h2>
                <FeedContainer />
            </div>
        );
    }
}

export default AboutPage;
