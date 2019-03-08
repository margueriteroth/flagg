// import React, { Component } from 'react';
// import Label from "components/_ui/Label/Label";
// import NumberDigitsChunk from "components/NumberTranslator/NumberDigitsChunk/NumberDigitsChunk";
// import NumberTextChunk from "components/NumberTranslator/NumberTextChunk/NumberTextChunk";
// import PropTypes from 'prop-types';
// import './NumberTranslator.css';

// class NumberTranslator extends Component {

//     componentDidUpdate(prevProps) {
//         if (prevProps.value !== this.props.value) {
//             this.props.setChunksToTranslate();
//         }
//     }

//     static propTypes = {
//         handleChange: PropTypes.func,
//         value: PropTypes.string,
//         periodOnes: PropTypes.object,
//         periodThousands: PropTypes.object,
//         periodMillions: PropTypes.object,
//         periodBillions: PropTypes.object,
//         arrOnes: PropTypes.array,
//         arrThousands: PropTypes.array,
//         arrMillions: PropTypes.array,
//         arrBillions: PropTypes.array,
//         themes: PropTypes.object,
//     };

//     render() {
//         const { handleChange, value, periodOnes, periodThousands, periodMillions, periodBillions, arrOnes, arrThousands, arrMillions, arrBillions, themes } = this.props;
//         return (
//             <div className="NumberTranslator">
//                 <Label>
//                     enter a number to convert
//                 </Label>
//                 <form onSubmit={this.handleSubmit}>
//                     <input
//                         autoFocus="true"
//                         className="NumberTranslator__input"
//                         number={value}
//                         onChange={handleChange}
//                         placeholder={"i.e. 23"}
//                         onInput={(e) => {
//                             e.target.value && (e.target.value = Math.max(0, parseInt(e.target.value, 10)).toString().slice(0, 12))
//                         }}
//                         type="number" />
//                 </form>
//                 <div className="NumberTranslator__translated">
//                     <Label>
//                         dígitos
//                     </Label>
//                     <div className="NumberTranslator__chunks">
//                         {arrBillions && (
//                             <NumberDigitsChunk
//                                 period={periodBillions}
//                                 arr={arrBillions}
//                                 theme={themes.billions}
//                             />
//                         )}

//                         {arrMillions && (
//                             <NumberDigitsChunk
//                                 period={periodMillions}
//                                 arr={arrMillions}
//                                 theme={themes.millions}
//                             />
//                         )}

//                         {arrThousands && (
//                             <NumberDigitsChunk
//                                 period={periodThousands}
//                                 arr={arrThousands}
//                                 theme={themes.thousands}
//                             />
//                         )}

//                         {arrOnes && (
//                             <NumberDigitsChunk
//                                 period={periodOnes}
//                                 arr={arrOnes}
//                                 theme={themes.ones}
//                             />
//                         )}
//                     </div>
//                 </div>
//                 <div className="NumberTranslator__translated">
//                     <Label>
//                         en español
//                     </Label>
//                     <div className="NumberTranslator__chunks">
//                         {arrBillions && (
//                             <NumberTextChunk
//                                 period={periodBillions}
//                                 arr={arrBillions}
//                                 theme={themes.billions}
//                             />
//                         )}

//                         {arrMillions && (
//                             <NumberTextChunk
//                                 period={periodMillions}
//                                 arr={arrMillions}
//                                 theme={themes.millions}
//                             />
//                         )}

//                         {arrThousands && (
//                             <NumberTextChunk
//                                 period={periodThousands}
//                                 arr={arrThousands}
//                                 theme={themes.thousands}
//                                 value={value}
//                             />
//                         )}

//                         {arrOnes && (
//                             <NumberTextChunk
//                                 period={periodOnes}
//                                 arr={arrOnes}
//                                 theme={themes.ones}
//                             />
//                         )}
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default NumberTranslator;