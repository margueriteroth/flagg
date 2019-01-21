import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ReactGA from 'react-ga';
import Button from "../_ui/Button/Button";
import Spinner from "../_ui/Spinner/Spinner";
import './NotFound.css';

class NotFound extends Component {
    trackEvent = (action) => {
        ReactGA.event({
            category: 'User',
            action: action
        });
    }

    render() {
        return (
            <div className="NotFound">
                <Spinner
                    className="NotFound__spinner__container"
                    pet="oscar"
                    size="xl"
                />
                <h1 className="NotFound__header">
                    page not found
                </h1>
                <Link to="/" className="NotFound__button"
                      onClick={() => this.trackEvent('404 | clicked Back Home')}>
                    <Button>
                        Head home
                    </Button>
                </Link>
            </div>
        );
    }
}

export default NotFound;
