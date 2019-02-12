import React, { Component } from 'react';
//import * as d3 from 'd3';
import { scaleBand, scaleLinear } from 'd3-scale';
import data from "moviedata";
import Axes from 'components/ChartMovies/Axes/Axes';
import Bars from 'components/ChartMovies/Bars/Bars';
import ChartContainer from 'components/ChartMovies/ChartContainer';
import Tooltip from 'components/ChartMovies/Tooltip/Tooltip';

class Chart extends Component {
    constructor(props) {
        super(props)
        this.xScale = scaleBand()
        this.yScale = scaleLinear()

        this.state = {
            hoveredBar: null,
        }
    }

    render() {
        const margins = { top: 50, right: 20, bottom: 100, left: 60 };
        const svgDimensions = {
            width: Math.max(this.props.parentWidth, 300),
            height: 500
        };

        const maxValue = Math.max(...data.map(d => d.value));

        // scaleBand type
        const xScale = this.xScale
            .padding(0.5)
            // scaleBand domain should be an array of specific values
            // in our case, we want to use movie titles
            .domain(data.map(d => d.title))
            .range([margins.left, svgDimensions.width - margins.right])

        // scaleLinear type
        const yScale = this.yScale
            // scaleLinear domain required at least two values, min and max
            .domain([0, maxValue])
            .range([svgDimensions.height - margins.bottom, margins.top])

        return (
            <div className="Chart">
                <svg width={svgDimensions.width} height={svgDimensions.height}>
                    <Axes
                        scales={{ xScale, yScale }}
                        margins={margins}
                        svgDimensions={svgDimensions}
                    />
                    <Bars
                        scales={{ xScale, yScale }}
                        margins={margins}
                        data={data}
                        maxValue={maxValue}
                        svgDimensions={svgDimensions}
                        onMouseOverCallback={datum => this.setState({ hoveredBar: datum })}
                        onMouseOutCallback={datum => this.setState({ hoveredBar: null })}
                    />
                </svg>
                {this.state.hoveredBar ?
                    <Tooltip
                        hoveredBar={this.state.hoveredBar}
                        scales={{ xScale, yScale }}
                    /> :
                    null
                }
            </div>
        );
    }
}

export default ChartContainer(Chart)
