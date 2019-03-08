import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class NumberDigitsChunk extends Component {

    static propTypes = {
        period: PropTypes.object,
        arr: PropTypes.array,
        theme: PropTypes.object,
    };

    render() {
        const { period, theme } = this.props;
        return (
            <h2 className={classNames("NumberDigitsChunk", `NumberDigitsChunk--${period.name}`)}>
                {period.hundreds && (
                    <React.Fragment>
                        <span className="NumberDigitsChunk__unit NumberDigitsChunk__unit--hundred" style={{color: theme.hundred}}>
                            {period.hundreds.digit}
                        </span>
                    </React.Fragment>
                )}
                {period.tens && (
                    <React.Fragment>
                        <span className="NumberDigitsChunk__unit NumberDigitsChunk__unit--ten" style={{ color: theme.ten }}>
                            {period.tens.digit}
                        </span>
                    </React.Fragment>
                )}
                {period.ones && (
                    <React.Fragment>
                        <span className="NumberDigitsChunk__unit NumberDigitsChunk__unit--single" style={{ color: theme.one }}>
                            {period.ones.digit}
                        </span>
                    </React.Fragment>
                )}
                {period.name !== 'periodOnes' && (
                    <React.Fragment>
                        <span className="NumberTextChunk__punctuation">
                            ,
                        </span>
                    </React.Fragment>
                )}
            </h2>
        );
    }
}

export default NumberDigitsChunk;