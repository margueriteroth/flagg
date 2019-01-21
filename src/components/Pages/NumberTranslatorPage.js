import React, { Component } from 'react';
import NumberTranslatorContainer from "components/Containers/NumberTranslatorContainer";

class NumberTranslatorPage extends Component {

    render() {
        return (
            <div className="NumberTranslatorPage">
                <h1>
                    Numeros en español
                </h1>
                <NumberTranslatorContainer />
            </div>
        );
    }
}

export default NumberTranslatorPage;
