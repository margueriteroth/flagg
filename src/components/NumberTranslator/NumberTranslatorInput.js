import React, { Component } from 'react';
import ReactGA from 'react-ga';
import Label from "components/_ui/Label/Label";
import PropTypes from 'prop-types';
import './NumberTranslator.css';

class NumberTranslatorInput extends Component {

    componentDidUpdate(prevProps) {
        if (prevProps.value !== this.props.value) {
            this.props.setChunksToTranslate();
            this.trackEvent('NumberTranslator (' + (this.props.isOnHomepage ? 'Home' : 'Page')  + ') | typed in input');
        }
    }

    static propTypes = {
        handleChange: PropTypes.func,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
    };

    trackEvent = (action) => {
        ReactGA.event({
            category: 'User',
            action: action
        });
    }

    render() {
        const { autofocus, handleChange, value } = this.props;
        return (
            <div className="NumberTranslator NumberTranslatorInput">
                <Label>
                    enter a number to convert
                </Label>
                <form onSubmit={this.handleSubmit}>
                    <input
                        onClick={() => this.trackEvent('NumberTranslator (' + (this.props.isOnHomepage ? 'Home' : 'Page') + ') | clicked input')}
                        autoFocus={autofocus}
                        className="NumberTranslator__input"
                        number={value}
                        value={value}
                        onChange={handleChange}
                        placeholder={"i.e. 23"}
                        onInput={(e) => {
                            e.target.value && (e.target.value = Math.max(0, parseInt(e.target.value, 10)).toString().slice(0, 12))
                        }}
                        type="number" />
                </form>
            </div>
        );
    }
}

export default NumberTranslatorInput;