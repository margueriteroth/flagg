import React, { Component } from 'react';
import NumberTranslatorContainer from "components/NumberTranslator/NumberTranslatorContainer";

class NumberTranslatorPage extends Component {
    scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    componentDidMount() {
        this.scrollToTop();
    }

    render() {
        return (
            <div className="NumberTranslatorPage">
                <h1>
                    Numeros en español
                </h1>
                <NumberTranslatorContainer autofocus />
            </div>
        );
    }
}

export default NumberTranslatorPage;
