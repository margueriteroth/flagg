import React, { Component } from 'react';
import Chart from "components/ChartMovies/Chart";
//import CrochetChart from "components/Chart/Chart";

class TestChartContainer extends Component {

    render() {
        return (
            <div className="TestChartContainer">
                <h2>
                    Chart
                </h2>
                {/* <CrochetChart/> */}
                <Chart/>
            </div>
        );
    }
}

export default TestChartContainer;
