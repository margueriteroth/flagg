import React, { Component } from 'react';
import ReactGA from 'react-ga';
import Feed from 'components/Feed/Feed';
import instagram from "instagram.csv";

class FeedContainer extends Component {
    state = {
        data: instagram,
    }

    trackEvent = (action) => {
        ReactGA.event({
            category: 'User',
            action: action
        });
    }

    render() {
        const { data } = this.state;
        return (
            <div>
                <Feed data={data}/>
            </div>
        );
    }
}

export default FeedContainer;
