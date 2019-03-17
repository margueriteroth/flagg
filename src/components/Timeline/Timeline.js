// import React, { Component } from 'react';
// import ReactGA from 'react-ga';
// import classNames from 'classnames';
// //import dsvData from "dvs_challenge_1_membership_time_space.csv";
// import * as d3 from "d3";


// import './Timeline.css';

// class Timeline extends Component {
//     constructor() {
//         super()
//         this.state = {
//             worldData: [],
//             data: [],
//         }
//         this.setAsyncState = this.setAsyncState.bind(this);
//     }

//     setAsyncState = (newState) =>
//         new Promise((resolve) => this.setState(newState, () => resolve()));

//     drawTimeline() {
//         const data = [12, 5, 6, 6, 9, 10];
//         const svg =
//             d3.select(".Timeline")
//                 .append("svg")
//                 .attr("width", 800)
//                 .attr("height", 60);

//         svg.selectAll("rect")
//             .data(data)
//             .enter()
//             .append("rect")
//             .attr("x", (d, i) => i * 70)
//             .attr("y", (d, i) => 60 - 10 * d)
//             .attr("width", 65)
//             .attr("height", (d, i) => d * 10)
//             .attr("fill", "green")
//     }

//     componentDidMount() {

//         this.setAsyncState({ data })
//             .then(foo1)
//             .then(foo2)
//             .catch(err => console.error(err))
//     }

//     render() {
//         return (
//             <div className="Timeline">
//             </div>
//         );
//     }
// }

// export default Timeline;
