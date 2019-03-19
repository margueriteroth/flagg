import React, { Component } from 'react';
import NumberTranslatorContainer from "components/NumberTranslator/NumberTranslatorContainer";
import ReactGA from 'react-ga';

class NumberTranslatorPage extends Component {
    scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    trackEvent = (action) => {
        ReactGA.event({
            category: 'User',
            action: action
        });
    }

    initializeReactGA() {
        ReactGA.initialize('UA-130275221-1');
        ReactGA.pageview('/numbers');
    }

    componentDidMount() {
        this.scrollToTop();
        this.initializeReactGA();
    }

    render() {
        return (
            <div className="NumberTranslatorPage">
                <h1 className="text-align--center">
                    Numeros en español
                </h1>
                <NumberTranslatorContainer autofocus />
            </div>
        );
    }
}

export default NumberTranslatorPage;
