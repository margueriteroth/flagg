import React, { Component } from 'react';
import ReactGA from 'react-ga';
import './FeedItem.css';

class FeedItem extends Component {

    trackEvent = (action) => {
        ReactGA.event({
            category: 'User',
            action: action
        });
    }

    render() {
        const { data, src } = this.props;
        return (
            <div className="FeedItem__container">
                <img className="FeedItem" src={src} />
            </div>
        );
    }
}

export default FeedItem;
