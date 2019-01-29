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
                <Avatar className="Intro__avatar" />
                <h1 className="Intro__header">
                    I'm a product designer <br /> and developer.
                </h1>

                {showingButtons && (
                    <div className="Intro__contact">
                        <AnchorLink href='#projects' offset="156">
                            <Button shape="square" size="large">
                                Explore projects
                            </Button>
                        </AnchorLink>

                        <a href="mailto:marguerite.roth@gmail.com"
                            onClick={() => this.trackEvent('Intro | clicked Contact Button')}
                            rel="noopener noreferrer" target="_blank">
                            <Button shape="square" size="large" category="secondary">
                                Contact
                            </Button>
                        </a>
                    </div>
                )}
            </div>
        );
    }
}

export default Intro;
