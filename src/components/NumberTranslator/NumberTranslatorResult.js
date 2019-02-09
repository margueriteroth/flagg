import React, { Component } from 'react';
import Label from "components/_ui/Label/Label";
import NumberDigitsChunk from "components/NumberTranslator/NumberDigitsChunk/NumberDigitsChunk";
import NumberTextChunk from "components/NumberTranslator/NumberTextChunk/NumberTextChunk";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './NumberTranslator.css';
import oscar from './img-oscar--blue.png';

class NumberTranslatorResult extends Component {

    static propTypes = {
        handleChange: PropTypes.func,
        value: PropTypes.string,
        periodOnes: PropTypes.object,
        periodThousands: PropTypes.object,
        periodMillions: PropTypes.object,
        periodBillions: PropTypes.object,
        arrOnes: PropTypes.array,
        arrThousands: PropTypes.array,
        arrMillions: PropTypes.array,
        arrBillions: PropTypes.array,
        themes: PropTypes.object,
    };

    render() {
        const { isJoined, periodOnes, periodThousands, periodMillions, periodBillions, arrOnes, arrThousands, arrMillions, arrBillions, themes } = this.props;
        return (
            <div className={classNames("NumberTranslator NumberTranslatorResult", {
                'NumberTranslatorResult--isJoined': isJoined
            })}>
                <div className="NumberTranslator__translated NumberTranslator__translated--digits">
                    {arrOnes && (
                        <Label>
                            dígitos
                        </Label>
                    )}
                    <div className="NumberTranslator__chunks">
                        {arrBillions && (
                            <NumberDigitsChunk
                                period={periodBillions}
                                arr={arrBillions}
                                theme={themes.billions}
                            />
                        )}

                        {arrMillions && (
                            <NumberDigitsChunk
                                period={periodMillions}
                                arr={arrMillions}
                                theme={themes.millions}
                            />
                        )}

                        {arrThousands && (
                            <NumberDigitsChunk
                                period={periodThousands}
                                arr={arrThousands}
                                theme={themes.thousands}
                            />
                        )}

                        {arrOnes && (
                            <NumberDigitsChunk
                                period={periodOnes}
                                arr={arrOnes}
                                theme={themes.ones}
                            />
                        )}
                    </div>
                </div>
                <div className="NumberTranslator__translated NumberTranslator__translated--text">
                    {/* {!arrOnes && (
                        <div>
                            <img src={oscar} />
                        </div>
                    )} */}
                    {arrOnes && (
                        <Label>
                            en español
                        </Label>
                    )}
                    <div className="NumberTranslator__chunks">
                        {arrBillions && (
                            <NumberTextChunk
                                period={periodBillions}
                                arr={arrBillions}
                                theme={themes.billions}
                            />
                        )}

                        {arrMillions && (
                            <NumberTextChunk
                                period={periodMillions}
                                arr={arrMillions}
                                theme={themes.millions}
                            />
                        )}

                        {arrThousands && (
                            <NumberTextChunk
                                period={periodThousands}
                                arr={arrThousands}
                                theme={themes.thousands}
                            />
                        )}

                        {arrOnes && (
                            <NumberTextChunk
                                period={periodOnes}
                                arr={arrOnes}
                                theme={themes.ones}
                            />
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default NumberTranslatorResult;