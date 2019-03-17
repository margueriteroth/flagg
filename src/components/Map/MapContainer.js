import React, { Component } from 'react';
import Spinner from "components/_ui/Spinner/Spinner";
import Label from "components/_ui/Label/Label";
import Map from "components/Map/Map";
import { geolocated } from 'react-geolocated';
import { geoMercator, geoPath } from "d3-geo";
import classNames from 'classnames';

class MapContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            containerWidth: null,
            isLoaded: false,
            userTop: null,
            userLeft: null
        }
        this.fitParentContainer = this.fitParentContainer.bind(this);
    }

    setUserOffsets = (top, left) => {
        // center of image
        top = top - 16;
        left = left - 16;
        this.setState({userTop: top, userLeft: left});
    }


    componentDidMount() {
        window.addEventListener('resize', this.fitParentContainer);
        this.fitParentContainer();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.fitParentContainer);
    }

    fitParentContainer() {
        const { containerWidth } = this.state;
        const currentContainerWidth = this.chartContainer
            .getBoundingClientRect().width;

        const shouldResize = (containerWidth !== currentContainerWidth);

        if (shouldResize) {
            this.setState({
                containerWidth: currentContainerWidth - 50,
            })
        }
    }

    setLoading = () => {
        this.setState({
            isLoaded: true
        })
    }

    render() {
        const { containerWidth, isLoaded, userTop, userLeft } = this.state;
        const { showData, showViz, showSociety, showMe } = this.props;
        return (
            <div className="MapContainer" ref={(el) => { this.chartContainer = el }}>
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
                            dsvData={this.props.dsvData}
                            setLoading={this.setLoading}
                            userCoords={this.props.coords}
                            setUserOffsets={this.setUserOffsets}
                            isLoaded={isLoaded}
                            setLoading={this.setLoading}
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

