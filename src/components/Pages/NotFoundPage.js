import React, { Component } from 'react';
import NotFound from "components/NotFound/NotFound";
import ReactGA from 'react-ga';
class NotFoundContainer extends Component {

    trackEvent = (action) => {
        ReactGA.event({
            category: 'User',
            action: action
        });
    }

    initializeReactGA() {
        ReactGA.initialize('UA-130275221-1');
        ReactGA.pageview('/404');
    }

    componentDidMount() {
        this.initializeReactGA();
    }

    render() {
        return (
            <div className="NotFoundContainer">
                <NotFound/>
            </div>
        );
    }
}

export default NotFoundContainer;
