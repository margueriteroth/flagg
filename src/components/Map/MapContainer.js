import React, { Component } from 'react';
import Spinner from "components/_ui/Spinner/Spinner";
import Label from "components/_ui/Label/Label";
import Map from "components/Map/Map";
import { geolocated } from 'react-geolocated';
import { geoMercator, geoPath } from "d3-geo";
import classNames from 'classnames';
import _ from "lodash";
import { fastest } from 'sw-toolbox';


class MapContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            containerWidth: null,
            isLoaded: false,
            userTop: null,
            userLeft: null
        }
        this.chartContainer = React.createRef();
        this.fitParentContainer = this.fitParentContainer.bind(this);
    }

    setUserOffsets = (top, left) => {
        // center of image
        top = top - 12;
        left = left - 10;
        this.setState({userTop: top, userLeft: left});
    }

    setInitialFit() {
        setTimeout(function () {
            this.fitParentContainer()
        }.bind(this), 10);
    }

    componentDidMount() {
        this.setInitialFit();
        window.addEventListener('resize',
            _.debounce(this.fitParentContainer, 1000)
        );
    }

    componentWillUnmount() {
        window.removeEventListener('resize',
            _.debounce(this.fitParentContainer, 1000)
        );
    }

    fitParentContainer() {
        console.log('fit');
        const { containerHeight, containerWidth } = this.state;
        const currentContainerWidth = this.chartContainer.current
            .getBoundingClientRect().width;

        const currentContainerHeight = this.chartContainer.current
            .getBoundingClientRect().height;

        const shouldResize = (containerWidth !== currentContainerWidth) || (containerHeight !== currentContainerHeight);

        if (shouldResize) {
            this.setState({
                containerWidth: currentContainerWidth,
                containerHeight: currentContainerHeight,
            })
        }
    }

    setLoading = () => {
        this.setState({
            isLoaded: true
        })
    }

    render() {
        const { containerHeight, containerWidth, isLoaded, userTop, userLeft } = this.state;
        const { showData, showViz, showSociety, showMe, showMap } = this.props;
        return (
            <div
                className="MapContainer"
                ref={this.chartContainer}

            >
                {!this.props.isGeolocationAvailable ? (
                    <Label>
                        Your browser does not support Geolocation
                    </Label>
                ) : !this.props.isGeolocationEnabled ? (
                        <Label>
                            Geolocation is not enabled
                        </Label>
                ) : this.props.coords ? (
                    <React.Fragment>
                        {/* <p>
                            width:{this.state.containerWidth}
                        </p>
                        <p>
                            height: {this.state.containerHeight}
                        </p> */}
                        {/* <p>
                            isResizing:
                            {isResizing ? (
                                <span>true</span>
                            ) : (
                                <span>false</span>
                            )}
                        </p> */}
                        {(showMe && isLoaded) && (
                            <div
                                className="Map__marker--you"
                                style={{
                                    top: `${userTop}px`,
                                    left: `${userLeft}px`
                                }}
                            >
                                <Spinner/>
                            </div>

                        )}
                        <Map
                            containerWidth={containerWidth}
                            containerHeight={containerHeight}
                            dsvData={this.props.dsvData}
                            setLoading={this.setLoading}
                            userCoords={this.props.coords}
                            setUserOffsets={this.setUserOffsets}
                            isLoaded={isLoaded}
                            setLoading={this.setLoading}
                            showMap={showMap}
                            showData={showData}
                            showViz={showViz}
                            showSociety={showSociety}
                        />
                    </React.Fragment>
                ) : (
                    <Spinner size="xl" spin className="Map__spinner" />
                )}
            </div>
        )
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(MapContainer);

