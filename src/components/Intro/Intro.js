import React, { Component } from 'react';
import Avatar from "../_ui/Avatar/Avatar";
//import Button from "components/_ui/Button/Button";
import ReactGA from 'react-ga';
import classNames from 'classnames';
//import { Link } from 'react-router-dom';
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
        const {animate} = this.props;
        return (
            <div className={classNames("Intro", {"Intro--animate" : animate})}>
                <Avatar className="Intro__avatar" />
                <h1 className="Intro__heading">
                    Hi — I'm Marguerite, <br /> a product
                    designer and developer.
                </h1>
                {/* {showingButtons && (
                    <div className="Intro__contact">
                        <Link
                            onClick={this.scrollToTop}
                            to="/about">
                            <Button>
                                About
                        </Button>
                        </Link>
                        <a href="mailto:marguerite.roth@gmail.com"
                            onClick={() => this.trackEvent('Intro | clicked Contact Button')}
                            rel="noopener noreferrer" target="_blank">
                            <Button category="secondary">
                                Contact
                        </Button>
                        </a>
                    </div>
                )} */}
            </div>
        );
    }
}

export default Intro;
