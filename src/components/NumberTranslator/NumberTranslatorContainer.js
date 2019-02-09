import React, { Component } from 'react';
import spanishNumbers from "spanishNumbers.js";
import NumberTranslatorInput from "components/NumberTranslator/NumberTranslatorInput";
import NumberTranslatorResult from "components/NumberTranslator/NumberTranslatorResult";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import _ from "lodash";

const emptyPeriod = {
    name: [],
    hundreds: {
        digit: [],
        text: []
    },
    tens: {
        digit: [],
        text: []
    },
    ones: {
        digit: [],
        text: []
    }
}

const themes = {
    ones: {
        hundred: "#4479D0",
        ten: "#5393FE",
        one: "#72A6FE"
    },
    thousands: {
        hundred: "#D16960",
        ten: "#FF8075",
        one: "#FFB3AC"
    },
    millions: {
        hundred: "#0C8346",
        ten: "#329F5B",
        one: "#57B078"
    },
    billions: {
        hundred: "#6B60BA",
        ten: "#9283FF",
        one: "#AFA4FF"
    }
}

class NumberTranslatorContainer extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        numArray: null,
        value: "",
        translatedValue: null,
        spanishNumbers: spanishNumbers,

        periodOnes: emptyPeriod,
        periodThousands: emptyPeriod,
        periodMillions: emptyPeriod,
        periodBillions: emptyPeriod,

        arrOnes: _.noop(),
        arrThousands: _.noop(),
        arrMillions: _.noop(),
        arrBillions: _.noop(),
    };

    static propTypes = {
        autofocus: PropTypes.bool,
    };

    clearInput = () => {
        this.setState({
            value: null,
            periodOnes: emptyPeriod,
            periodThousands: emptyPeriod,
            periodMillions: emptyPeriod,
            periodBillions: emptyPeriod,

            arrOnes: _.noop(),
            arrThousands: _.noop(),
            arrMillions: _.noop(),
            arrBillions: _.noop(),
        });
    }

    handleChange = (event) => {
        if (!event.target.value) {
            this.clearInput();
        } else {
            this.setState({ value: event.target.value });
            this.splitUpPeriods(event.target.value);
        }
    }

    componentDidMount() {
        this.setState({ value: 0 });
        this.splitUpPeriods(0);
    }


    unsetAll(arr) {
        //hey, maybe refactor this, k?
        _.set(arr, 'hundreds.digit', []);
        _.set(arr, 'tens.digit', []);
        _.set(arr, 'ones.digit', []);
        _.set(arr, 'hundreds.text', []);
        _.set(arr, 'tens.text', []);
        _.set(arr, 'ones.text', []);
    }


    splitUpPeriods = (num) => {
        //split up number into chunks of 3 from right to left
        //(currently reversing to be able to assign right to left, 0 and so on)
        let periodChunks = _.chunk(_.reverse(_.split(num.toString(), "")), 3);

        //reverse each chunk back to proper order
        periodChunks = _.forEach(periodChunks, function (val) {
            return _.reverse(val);
        });

        const arrOnes = periodChunks[0];
        const arrThousands = periodChunks[1];
        const arrMillions = periodChunks[2];
        const arrBillions = periodChunks[3];

        this.setState({ arrOnes, arrThousands, arrMillions, arrBillions });
    }

    setChunksToTranslate = () => {
        const { arrOnes, arrThousands, arrMillions, arrBillions } = this.state;

        if (arrOnes)      { this.translatePeriodOnes(arrOnes, 'periodOnes'); }
        if (arrThousands) { this.translatePeriodThousands(arrThousands, 'periodThousands'); }
        if (arrMillions)  { this.translatePeriodMillions(arrMillions, 'periodMillions'); }
        if (arrBillions)  { this.translatePeriodBillions(arrBillions, 'periodBillions'); }
    }

    //WILL REFACTOR!
    translatePeriodOnes = (arr, key) => {
        let digits = _.join(arr, "");
        let periodOnes = {
            name: key,
            hundreds: {
                digit: [],
                text: []
            },
            tens: {
                digit: [],
                text: []
            },
            ones: {
                digit: [],
                text: []
            }
        }

        if (arr.length === 0) {
            this.unsetAll(periodOnes);
        } else if (arr.length === 1) {
            this.unsetAll(periodOnes);
            _.set(periodOnes, 'ones.digit', arr[0]);
            _.set(periodOnes, 'ones.text', spanishNumbers.base[arr]);
        } else if (arr.length === 2) {
            this.unsetAll(periodOnes);
            _.set(periodOnes, 'tens.digit', arr[0]);
            _.set(periodOnes, 'ones.digit', arr[1]);
        } else if (arr.length === 3) {
            this.unsetAll(periodOnes);
            _.set(periodOnes, 'hundreds.digit', arr[0]);
            _.set(periodOnes, 'tens.digit', arr[1]);
            _.set(periodOnes, 'ones.digit', arr[2]);
        }

        let tens = arr.length > 1 ? _.join([periodOnes.tens.digit, periodOnes.ones.digit], "") : [];
        if (arr.length === 1) {
            _.set(periodOnes, 'ones.text', spanishNumbers.base[arr]);
        } else if (arr.length === 2) {
            this.setTens(tens, periodOnes)
        } else if (arr.length === 3) {
            if (digits === "100") {
                _.set(periodOnes, 'hundreds.text', 'cien');

            } else if (arr[1] === "0") {
                if (arr[2] === "0") {
                    _.set(periodOnes, 'hundreds.text', spanishNumbers.base[arr[0] + "00"]);
                } else {
                    _.set(periodOnes, 'hundreds.text', spanishNumbers.base[arr[0] + "00"]);
                    _.set(periodOnes, 'ones.text', spanishNumbers.base[arr[2]]);
                }
            } else {
                _.set(periodOnes, 'hundreds.text', spanishNumbers.base[arr[0] + "00"]);
                this.setTens(tens, periodOnes)
            }
        }

        this.setState({[key]: periodOnes})
    }

    translatePeriodThousands = (arr, key) => {
        let digits = _.join(arr, "");
        let periodThousands = {
            name: key,
            hundreds: {
                digit: [],
                text: []
            },
            tens: {
                digit: [],
                text: []
            },
            ones: {
                digit: [],
                text: []
            }
        }

        if (arr.length === 0) {
            this.unsetAll(periodThousands);
        } else if (arr.length === 1) {
            this.unsetAll(periodThousands);
            _.set(periodThousands, 'ones.digit', arr[0]);
            _.set(periodThousands, 'ones.text', spanishNumbers.base[arr]);
        } else if (arr.length === 2) {
            this.unsetAll(periodThousands);
            _.set(periodThousands, 'tens.digit', arr[0]);
            _.set(periodThousands, 'ones.digit', arr[1]);
        } else if (arr.length === 3) {
            this.unsetAll(periodThousands);
            _.set(periodThousands, 'hundreds.digit', arr[0]);
            _.set(periodThousands, 'tens.digit', arr[1]);
            _.set(periodThousands, 'ones.digit', arr[2]);
        }

        let tens = arr.length > 1 ? _.join([periodThousands.tens.digit, periodThousands.ones.digit], "") : [];
        if (arr.length === 1) {
            _.set(periodThousands, 'ones.text', spanishNumbers.base[arr]);
        } else if (arr.length === 2) {
            this.setTens(tens, periodThousands)
        } else if (arr.length === 3) {
            if (digits === "100") {
                _.set(periodThousands, 'hundreds.text', 'cien');
            } else if (arr[1] === "0") {
                if (arr[2] === "0") {
                    _.set(periodThousands, 'hundreds.text', spanishNumbers.base[arr[0] + "00"]);
                } else if (arr[2] === "1") {
                    _.set(periodThousands, 'hundreds.text', spanishNumbers.base[arr[0] + "00"]);
                    _.set(periodThousands, 'ones.text', 'un'); //no "uno" past 1000
                } else {
                    _.set(periodThousands, 'hundreds.text', spanishNumbers.base[arr[0] + "00"]);
                    _.set(periodThousands, 'ones.text', spanishNumbers.base[arr[2]]);
                }
            } else {
                _.set(periodThousands, 'hundreds.text', spanishNumbers.base[arr[0] + "00"]);
                this.setTens(tens, periodThousands)
            }
        }

        this.setState({ [key]: periodThousands })
    }

    translatePeriodMillions = (arr, key) => {
        let digits = _.join(arr, "");
        let periodMillions = {
            name: key,
            hundreds: {
                digit: [],
                text: []
            },
            tens: {
                digit: [],
                text: []
            },
            ones: {
                digit: [],
                text: []
            }
        }

        if (arr.length === 0) {
            this.unsetAll(periodMillions);
        } else if (arr.length === 1) {
            this.unsetAll(periodMillions);
            _.set(periodMillions, 'ones.digit', arr[0]);
            _.set(periodMillions, 'ones.text', spanishNumbers.base[arr]);
        } else if (arr.length === 2) {
            this.unsetAll(periodMillions);
            _.set(periodMillions, 'tens.digit', arr[0]);
            _.set(periodMillions, 'ones.digit', arr[1]);
        } else if (arr.length === 3) {
            this.unsetAll(periodMillions);
            _.set(periodMillions, 'hundreds.digit', arr[0]);
            _.set(periodMillions, 'tens.digit', arr[1]);
            _.set(periodMillions, 'ones.digit', arr[2]);
        }

        let tens = arr.length > 1 ? _.join([periodMillions.tens.digit, periodMillions.ones.digit], "") : [];
        if (arr.length === 1) {
            _.set(periodMillions, 'ones.text', spanishNumbers.base[arr]);
        } else if (arr.length === 2) {
            this.setTens(tens, periodMillions)
        } else if (arr.length === 3) {
            if (digits === "100") {
                _.set(periodMillions, 'hundreds.text', 'cien');
            } else if (arr[1] === "0") {
                if (arr[2] === "0") {
                    _.set(periodMillions, 'hundreds.text', spanishNumbers.base[arr[0] + "00"]);
                } else if (arr[2] === "1") {
                    _.set(periodMillions, 'hundreds.text', spanishNumbers.base[arr[0] + "00"]);
                    _.set(periodMillions, 'ones.text', 'un'); //no "uno" past 1000
                } else {
                    _.set(periodMillions, 'hundreds.text', spanishNumbers.base[arr[0] + "00"]);
                    _.set(periodMillions, 'ones.text', spanishNumbers.base[arr[2]]);
                }
            } else {
                _.set(periodMillions, 'hundreds.text', spanishNumbers.base[arr[0] + "00"]);
                this.setTens(tens, periodMillions)
            }
        }

        this.setState({ [key]: periodMillions })
    }

    translatePeriodBillions = (arr, key) => {
        let digits = _.join(arr, "");
        let periodBillions = {
            name: key,
            hundreds: {
                digit: [],
                text: []
            },
            tens: {
                digit: [],
                text: []
            },
            ones: {
                digit: [],
                text: []
            }
        }

        if (arr.length === 0) {
            this.unsetAll(periodBillions);
        } else if (arr.length === 1) {
            this.unsetAll(periodBillions);
            _.set(periodBillions, 'ones.digit', arr[0]);
            _.set(periodBillions, 'ones.text', spanishNumbers.base[arr]);
        } else if (arr.length === 2) {
            this.unsetAll(periodBillions);
            _.set(periodBillions, 'tens.digit', arr[0]);
            _.set(periodBillions, 'ones.digit', arr[1]);
        } else if (arr.length === 3) {
            this.unsetAll(periodBillions);
            _.set(periodBillions, 'hundreds.digit', arr[0]);
            _.set(periodBillions, 'tens.digit', arr[1]);
            _.set(periodBillions, 'ones.digit', arr[2]);
        }

        let tens = arr.length > 1 ? _.join([periodBillions.tens.digit, periodBillions.ones.digit], "") : [];
        if (arr.length === 1) {
            _.set(periodBillions, 'ones.text', spanishNumbers.base[arr]);
        } else if (arr.length === 2) {
            this.setTens(tens, periodBillions)
        } else if (arr.length === 3) {
            if (digits === "100") {
                _.set(periodBillions, 'hundreds.text', 'cien');
            } else if (arr[1] === "0") {
                if (arr[2] === "0") {
                    _.set(periodBillions, 'hundreds.text', spanishNumbers.base[arr[0] + "00"]);
                } else if (arr[2] === "1") {
                    _.set(periodBillions, 'hundreds.text', spanishNumbers.base[arr[0] + "00"]);
                    _.set(periodBillions, 'ones.text', 'un'); //no "uno" past 1000
                } else {
                    _.set(periodBillions, 'hundreds.text', spanishNumbers.base[arr[0] + "00"]);
                    _.set(periodBillions, 'ones.text', spanishNumbers.base[arr[2]]);
                }
            } else {
                _.set(periodBillions, 'hundreds.text', spanishNumbers.base[arr[0] + "00"]);
                this.setTens(tens, periodBillions)
            }
        }

        this.setState({ [key]: periodBillions })
    }

    setTens = (tens, period) => {
        if (tens <= 30 || tens[1] === "0") {
            _.set(period, 'tens.text', spanishNumbers.base[tens]);
            _.set(period, 'tens.digit', tens);
            _.set(period, 'ones.digit', _.noop());
        } else {
            _.set(period, 'tens.text', spanishNumbers.base[tens[0] + "0"] + " y");
            _.set(period, 'ones.text', spanishNumbers.base[tens[1]]);
        }
    }

    render() {
        const { autofocus, isJoined } = this.props;
        const { value, periodOnes, periodThousands, periodMillions, periodBillions, arrOnes, arrThousands, arrMillions, arrBillions } = this.state;
        return (
            <div className={classNames("NumberTranslatorContainer", {
                'NumberTranslator--isJoined': isJoined
            })}>
                <NumberTranslatorInput
                    className={classNames({
                        'NumberTranslatorInput--isJoined': isJoined
                    })}
                    {...this.props}
                    setChunksToTranslate={this.setChunksToTranslate}
                    handleChange={this.handleChange}
                    isJoined={isJoined}
                    value={value}
                    autofocus={autofocus}
                />
                <NumberTranslatorResult
                    isJoined={isJoined}
                    periodOnes={periodOnes}
                    periodThousands={periodThousands}
                    periodMillions={periodMillions}
                    periodBillions={periodBillions}

                    arrOnes={arrOnes}
                    arrThousands={arrThousands}
                    arrMillions={arrMillions}
                    arrBillions={arrBillions}
                    themes={themes}
                />
            </div>
        );
    }
}

export default NumberTranslatorContainer;
