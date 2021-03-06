import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { Link } from 'react-router-dom';
import Avatar from "components/_ui/Avatar/Avatar";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import classNames from 'classnames';
import Button from "components/_ui/Button/Button";
import Label from "components/_ui/Label/Label";
import PropTypes from 'prop-types';
import './Navigation.css';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navIsVisible: false,
        };
    }

    static propTypes = {
        currentPage: PropTypes.string,
    };

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
            <div id="top" className={classNames("Navigation__container",
                           {"Navigation__container--is-visible" : navIsVisible})}>
                <div className="Navigation">
                    <div className="Navigation__links">
                        <AnchorLink
                            href='#top' offset="156" className="Navigation__item Navigation__item--avatar">
                            <Avatar className="Navigation__avatar" />
                        </AnchorLink>
                    </div>
                    <div className="Navigation__links">
                        <AnchorLink
                            href='#projects' offset="156" className="Navigation__item">
                            Projects
                        </AnchorLink>
                        {/* <Link
                            onClick={() => this.onClick('About')}
                            className={classNames("Navigation__item Navigation__item--about",
                                { "Navigation__item--current": currentPage === "/about" })}
                            to="/about">
                            <Label category="primary">
                                About
                            </Label>
                        </Link> */}
                        <a href="mailto:hello@marguerite.io"
                            className="Navigation__item"
                            onClick={() => this.trackEvent('Navigation | clicked Contact')}
                            rel="noopener noreferrer" target="_blank">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation;

