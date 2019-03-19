import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MetaTags from 'react-meta-tags';
import Footer from "./Footer/Footer";
import MainContainer from "./Containers/MainContainer";
import Navigation from "components/Navigation/Navigation";
import '../styles/global.css';

class App extends Component {
    state = {
        projectSectionOffset: 640,
        navProjectsIsActive: false,
        navsAreHidden: false,
    }

    hideNavs = () => {
        this.setState({ navsAreHidden: true });
    }

    showNavs = () => {
        this.setState({ navsAreHidden: false });
    }

    setProjectSectionOffset = (offset) => {
        this.setState({ projectSectionOffset: offset});
    }

    handleScrollToElement = () => {
        const offset = this.state.projectSectionOffset - 120;
        window.scrollTo(0, offset);
        this.trackEvent('Navigation | Clicked Projects');
    }

    render() {
        const { navProjectsIsActive, projectSectionOffset, navsAreHidden } = this.state;
        return (
            <div className="App">
                <MetaTags>
                    <title>Marguerite Roth | Product Designer and Developer</title>
                    <meta name="description" content="Developer, designer, pizza maker. Somewhere in NY." />
                    <meta name="keywords" content="Marguerite, Marguerite Roth, marguerite.io, margueriteroth.com, marguerite.pizza, software, ui, ux, developer, designer, crochet, code, react, data, dataviz, " />
                    <meta property="og:title" content="Marguerite Roth | Product Designer and Developer" />
                    <meta property="og:image" content="path/marguerite-roth.jpg" />
                </MetaTags>
                {!navsAreHidden && (
                    <Route render={(routerProps) =>
                        <Navigation
                            handleScrollToElement={this.handleScrollToElement}
                            navProjectsIsActive={navProjectsIsActive}
                            routerProps={routerProps}
                            currentPage={routerProps.location.pathname}
                            projectSectionOffset={projectSectionOffset}
                        />
                    } />
                )}

                <Route render={(routerProps) =>
                    <MainContainer
                        routerProps={routerProps}
                        ref={this.myRef}
                        setProjectSectionOffset={this.setProjectSectionOffset}
                        navsAreHidden={navsAreHidden}
                        hideNavs={this.hideNavs}
                        showNavs={this.showNavs}
                    />
                } />
                {!navsAreHidden && (
                    <Footer />
                )}
            </div>
        );
    }
}

export default App;
