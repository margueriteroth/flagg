import React, { Component } from 'react';
// import Avatar from "../_ui/Avatar/Avatar";
// import Button from "components/_ui/Button/Button";
// import ReactGA from 'react-ga';
// import classNames from 'classnames';
// import { Link } from 'react-router-dom';
import './About.css';

class About extends Component {

    // trackEvent = (action) => {
    //     ReactGA.event({
    //         category: 'User',
    //         action: action,
    //     });
    // }

    render() {
        // const {animate, showingButtons} = this.props;
        return (
            <div className="About">
                <h3>
                    I am a product designer and developer who is passionate
                    creating user interfaces.
                </h3>
            </div>
        );
    }
}

export default About;
