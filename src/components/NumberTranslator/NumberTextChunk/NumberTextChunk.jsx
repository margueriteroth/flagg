import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class NumberTextChunk extends Component {

    static propTypes = {
        period: PropTypes.object,
        arr: PropTypes.array,
        theme: PropTypes.object,
    };

    render() {
        const { period, theme } = this.props;
        return (
            <h2 className={classNames("NumberTextChunk", `NumberTextChunk--${period.name}`)}>
                {period.hundreds.text && (
                    <React.Fragment>
                        <span className="NumberTextChunk__unit NumberTextChunk__unit--hundred" style={{color: theme.hundred}}>
                            {period.hundreds.text}
                        </span>
                        {period.hundreds.text.length > 0 && (
                            <span className="NumberTextChunk__punctuation">
                                &nbsp;
                            </span>
                        )}
                    </React.Fragment>
                )}
                {period.tens.text && (
                    <React.Fragment>
                        <span className="NumberTextChunk__unit NumberTextChunk__unit--ten" style={{ color: theme.ten }}>
                            {period.tens.text}
                        </span>
                        {(period.tens.text.length > 0 && period.ones.text.length !== 0) && (
                            <span className="NumberTextChunk__punctuation">
                                &nbsp;
                            </span>
                        )}
                    </React.Fragment>
                )}
                {period.ones.text && (
                    <React.Fragment>
                        <span className="NumberTextChunk__unit NumberTextChunk__unit--single" style={{ color: theme.one }}>
                            {period.ones.text}
                        </span>

                    </React.Fragment>
                )}
                {period.name !== 'periodOnes' && (
                    <span className="NumberTextChunk__punctuation">
                        &nbsp;
                    </span>
                )}
                {period.name === 'periodThousands' && (
                    <React.Fragment>
                        <span className="NumberTextChunk__period__name" style={{ color: theme.one }}>
                            mil
                        </span>
                        <span className="NumberTextChunk__punctuation">
                            ,
                        </span>
                        <span className="NumberTextChunk__punctuation">
                            &nbsp;
                        </span>
                    </React.Fragment>
                )}
                {period.name === 'periodMillions' && (
                    <React.Fragment>
                        <span className="NumberTextChunk__period__name" style={{ color: theme.one }}>
                            millones
                        </span>
                        <span className="NumberTextChunk__punctuation">
                            ,
                        </span>
                        <span className="NumberTextChunk__punctuation">
                            &nbsp;
                        </span>
                    </React.Fragment>
                )}
                {period.name === 'periodBillions' && (
                    <React.Fragment>
                        <span className="NumberTextChunk__period__name" style={{ color: theme.one }}>
                            mil
                        </span>
                        <span className="NumberTextChunk__punctuation">
                            ,
                        </span>
                        <span className="NumberTextChunk__punctuation">
                            &nbsp;
                        </span>
                    </React.Fragment>
                )}
            </h2>
        );
    }
}

export default NumberTextChunk;