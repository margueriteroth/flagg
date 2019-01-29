import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MetaTags from 'react-meta-tags';
import ReactGA from 'react-ga';
import Footer from "./Footer/Footer";
import MainContainer from "./Containers/MainContainer";
import Navigation from "components/Navigation/Navigation";
import '../styles/global.css';

class App extends Component {
    state = {
        projectSectionOffset: 640,
        navProjectsIsActive: false,
    }

    setProjectSectionOffset = (offset) => {
        this.setState({ projectSectionOffset: offset});
    }

    handleScrollToElement = () => {
        const offset = this.state.projectSectionOffset - 120;
        window.scrollTo(0, offset);
        this.trackEvent('Navigation | Clicked Projects');
    }

    initializeReactGA() {
        ReactGA.initialize('UA-130275221-1');
        ReactGA.pageview('/homepage');
    }

    trackEvent = (action) => {
        ReactGA.event({
            category: 'User',
            action: action
        });
    }

    componentDidMount() {
        this.initializeReactGA();
    }

    render() {
        const { navProjectsIsActive, projectSectionOffset } = this.state;
        return (
            <div className="App">
                <MetaTags>
                    <title>Marguerite Roth | Product Designer and Developer</title>
                    <meta name="description" content="Developer, designer, pizza maker. Somewhere in NY." />
                    <meta name="keywords" content="Marguerite, Marguerite Roth, marguerite.io, margueriteroth.com, marguerite.pizza, software, ui, ux, developer, designer, crochet, code, react, data, dataviz, " />
                    <meta property="og:title" content="Marguerite Roth | Product Designer and Developer" />
                    <meta property="og:image" content="path/marguerite-roth.jpg" />
                </MetaTags>
                <Route render={(routerProps) =>
                    <Navigation
                        handleScrollToElement={this.handleScrollToElement}
                        navProjectsIsActive={navProjectsIsActive}
                        routerProps={routerProps}
                        currentPage={routerProps.location.pathname}
                        projectSectionOffset={projectSectionOffset}
                    />
                } />
                <Route render={(routerProps) =>
                    <MainContainer
                        routerProps={routerProps}
                        ref={this.myRef}
                        setProjectSectionOffset={this.setProjectSectionOffset}
                    />
                } />
                <Footer />
            </div>
        );
    }
}

export default App;
