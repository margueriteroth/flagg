import React, { Component } from 'react';
import Avatar from "../_ui/Avatar/Avatar";
import Button from "components/_ui/Button/Button";
import Spinner from "components/_ui/Spinner/Spinner";
import ReactGA from 'react-ga';
import classNames from 'classnames';
import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import _ from "lodash";
import './Map.css';

class Map extends Component {
    constructor() {
        super()
        this.state = {
            worldData: [],
            data: [],
        }
        this.user = React.createRef();
    }

    projection() {
        return geoMercator().scale(100).translate([1000 / 2, 550 / 2])
    }

    setSkill = (data) => {
        data.map((elem) => {
            const obj = [
                {
                    name: "data",
                    value: elem.data,
                },
                {
                    name: "visualization",
                    value: elem.visualization,
                },
                {
                    name: "society",
                    value: elem.society,
                }
            ];
            const skill = _.maxBy(obj, 'value');
            return elem.skill = skill.name;
        });
        return data;
    }

    setUser() {
        const top = this.user.getBoundingClientRect().y;
        const left = this.user.getBoundingClientRect().x;
        this.props.setUserOffsets(top, left);
    }

    componentDidMount() {
        fetch("https://unpkg.com/world-atlas@1.1.4/world/110m.json")
            .then(response => {
                if (response.status !== 200) {
                    console.log(`There was a problem: ${response.status}`)
                    return
                }
                response.json().then(worldData => {
                    this.setState({
                        worldData: feature(worldData, worldData.objects.countries).features,
                        data: this.setSkill(this.props.dsvData)
                    })

                    this.props.setLoading();
                    this.setUser();
                })
            })
    }

    determineStrengthHex(skill) {
        if (skill === "data") {
            return "#29B6A8";
        } else if (skill === "visualization") {
            return "#F4AE05";
        } else {
            return "#9769F8";
        }
    }

    render() {
        const { containerWidth, showData, showViz, showSociety, isLoaded } = this.props;
        return (
            <div className="Map">
                <React.Fragment>
                    {/* <svg width="1050" height="600" viewBox="0 0 900 400"> */}
                    <svg width={containerWidth} height="670" viewBox="0 0 900 400">
                        <g className="countries">
                            {
                                this.state.worldData.map((d, i) => (
                                    <path
                                        key={`path-${i}`}
                                        d={geoPath().projection(this.projection())(d)}
                                        className="country"
                                        fill='#F7F5F9'
                                        opacity='0.95'
                                        stroke="#FFFFFF"
                                        strokeWidth={1}
                                    />
                                ))
                            }
                        </g>
                        <g className="markers">
                            {
                                this.state.data.map((member, i) => (
                                    ((member.skill === "data" && showData) ? (
                                        <circle
                                            key={`marker-${i}`}
                                            cx={this.projection()([member.long, member.lat])[0]}
                                            cy={this.projection()([member.long, member.lat])[1]}
                                            r={3}
                                            fill={this.determineStrengthHex(member.skill)}
                                            stroke={this.determineStrengthHex(member.skill)}
                                            className="Map__marker"
                                        />
                                    ) : (member.skill === "visualization" && showViz) ? (
                                            <circle
                                                key={`marker-${i}`}
                                                cx={this.projection()([member.long, member.lat])[0]}
                                                cy={this.projection()([member.long, member.lat])[1]}
                                                r={3}
                                                fill={this.determineStrengthHex(member.skill)}
                                                stroke={this.determineStrengthHex(member.skill)}
                                                className="Map__marker"
                                            />
                                    ) : (member.skill === "society" && showSociety) && (
                                            <circle
                                                key={`marker-${i}`}
                                                cx={this.projection()([member.long, member.lat])[0]}
                                                cy={this.projection()([member.long, member.lat])[1]}
                                                r={3}
                                                fill={this.determineStrengthHex(member.skill)}
                                                stroke={this.determineStrengthHex(member.skill)}
                                                className="Map__marker"
                                            />
                                    ))
                                ))

                            }
                        </g>
                        {isLoaded && (
                            <g>
                                <circle
                                    ref={(el) => { this.user = el }}
                                    cx={this.projection()([this.props.userCoords.longitude, this.props.userCoords.latitude])[0]}
                                    cy={this.projection()([this.props.userCoords.longitude, this.props.userCoords.latitude])[1]}
                                    r={3}
                                    fill="#FFCF5C"
                                    className="Map__marker Map__marker--user"
                                />
                            </g>
                        )}
                    </svg>
                </React.Fragment>
            </div>
        );
    }
}

export default Map;
