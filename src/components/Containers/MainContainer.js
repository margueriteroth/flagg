import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import classNames from 'classnames';
//import AboutPage from "components/Pages/AboutPage";
import DVSPage from "components/Pages/DVSPage";
import HomePage from "components/Pages/HomePage";
import NotFoundPage from "components/Pages/NotFoundPage";
import NumberTranslatorPage from "components/Pages/NumberTranslatorPage";
import TestChartPage from "components/Pages/TestChartPage";

class MainContainer extends Component {

    render() {
        return (
            <div className={classNames("MainContainer", { 'MainContainer--wide': this.props.navsAreHidden })}>
                <Switch>
                    <Route exact path='/' render={(routerProps) =>
                        <HomePage
                            routerProps={routerProps}
                            setProjectSectionOffset={this.props.setProjectSectionOffset}
                        />
                    } />
                    {/* <Route exact path="/about" component={AboutPage} /> */}
                    <Route exact path='/dvs' render={(routerProps) =>
                        <DVSPage
                            hideNavs={this.props.hideNavs}
                            showNavs={this.props.showNavs}
                        />
                    } />
                    <Route exact path="/numeros-en-espanol" component={NumberTranslatorPage} />
                    <Route exact path="/test-chart" component={TestChartPage} />
                    <Route path="*" component={NotFoundPage} />
                </Switch>
            </div>
        );
    }
}

export default MainContainer;
