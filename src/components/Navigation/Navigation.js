import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { Link } from 'react-router-dom';
import Avatar from "components/_ui/Avatar/Avatar";
import classNames from 'classnames';
import Button from "components/_ui/Button/Button";
import Label from "components/_ui/Label/Label";
//import PropTypes from 'prop-types';
import './Navigation.css';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navIsVisible: false,
        };
    }

    trackEvent = (action) => {
        ReactGA.event({
            category: 'User',
            action: action,
        });
    }

    onClick = (linkName) => {
        this.scrollToTop();
        this.trackEvent( 'Navigation | clicked ' + linkName);
    }

    scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    slideNavigation = () => {
        const distanceToTop = window.scrollY;
        const { projectSectionOffset } = this.props;

        if (distanceToTop > projectSectionOffset * 0.25) {
            this.setState({ navIsVisible: true });
        } else {
            this.setState({ navIsVisible: false });
        }
    }

    setPageType = (currentPage) => {
        const { projectSectionOffset } = this.props;
        const distanceToTop = window.scrollY;

        if (currentPage === "/" && distanceToTop < projectSectionOffset * 0.25) {
            window.addEventListener('scroll', this.slideNavigation);
            this.setState({ navIsVisible: false});
        } else if (currentPage === "/" && distanceToTop > projectSectionOffset * 0.25) {
            window.addEventListener('scroll', this.slideNavigation);
            this.setState({ navIsVisible: true });
        } else {
            window.removeEventListener('scroll', this.slideNavigation);
            this.setState({ navIsVisible: true});
        }
    }

    componentDidMount() {
        const currentPage = this.props.currentPage;
        this.setPageType(currentPage);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.routerProps !== this.props.routerProps) {
            const currentPage = this.props.currentPage;
            this.setPageType(currentPage);
        }
    }

    render() {
        const { navIsVisible } = this.state;
        const { currentPage } = this.props;
        return (
            <div className={classNames("Navigation__container",
                           {"Navigation__container--is-visible" : navIsVisible})}>
                <div className="Navigation">
                    <div className="Navigation__links">
                        <Link
                            onClick={() => this.onClick('Home (avatar)')}
                            className="Navigation__item Navigation__item--avatar"
                            to="/">
                            <Avatar className="Navigation__avatar" />
                        </Link>
                        <Link
                            onClick={() => this.onClick('Home (name)')}
                            className="Navigation__item Navigation__item--title"
                            to="/">
                            Marguerite Roth
                        </Link>
                    </div>
                    <div className="Navigation__links">
                        <Link
                            onClick={this.props.handleScrollToElement}
                            className={classNames("Navigation__item",
                                { "Navigation__item--current": currentPage ==="/"})}
                            to="/">
                            <Label category="primary">
                                Projects
                            </Label>
                        </Link>
                        {/* <Link
                            onClick={() => this.onClick('About')}
                            className={classNames("Navigation__item Navigation__item--about",
                                { "Navigation__item--current": currentPage === "/about" })}
                            to="/about">
                            <Label category="primary">
                                About
                            </Label>
                        </Link> */}
                        <a href="mailto:marguerite.roth@gmail.com"
                            onClick={() => this.trackEvent('Navigation | clicked Contact')}
                            rel="noopener noreferrer" target="_blank">
                            <Button>
                                Contact
                            </Button>
                        </a>
                    </div>



                </div>
            </div>
        );
    }
}

export default Navigation;

