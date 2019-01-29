import React, { Component } from 'react';
import ReactGA from 'react-ga';
import FeedItem from 'components/Feed/FeedItem';
import './Feed.css';

class Feed extends Component {

    trackEvent = (action) => {
        ReactGA.event({
            category: 'User',
            action: action
        });
    }

    render() {
        const { data } = this.props;
        return (
            <div className="Feed">
                {Object.keys(data).map((key) =>
                    <FeedItem src={data[key].img_src}/>
                )}
            </div>
        );
    }
}

export default Feed;
