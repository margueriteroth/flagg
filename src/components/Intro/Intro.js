import React, { Component } from 'react';
import Avatar from "../_ui/Avatar/Avatar";
import Button from "components/_ui/Button/Button";
import ReactGA from 'react-ga';
import classNames from 'classnames';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom';
import './Intro.css';

class Intro extends Component {

    scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    trackEvent = (action) => {
        ReactGA.event({
            category: 'User',
            action: action,
        });
    }

    render() {
        const {animate, showingButtons} = this.props;
        return (
            <div className={classNames("Intro", {"Intro--animate" : animate})}>
                {/* <Avatar className="Intro__avatar" /> */}
                <h1 className="Intro__header">
                    Hello! I’m Marguerite, a designer and developer specializing
                    in product design and user experience.
                </h1>
                <h3 className="Intro__subheader">
                    I also enjoy messing around with data visualizations. 😊
                    {/* Currently design and UX at <a href="https://www.parse.ly/"
                        onClick={() => this.trackEvent('Intro | clicked Parse.ly')}
                        rel="noopener noreferrer" target="_blank">Parse.ly</a> */}
                </h3>
            </div>
        );
    }
}

export default Intro;
