import React, { Component } from 'react';
import ReactGA from 'react-ga';
import Button from "../_ui/Button/Button";
import Label from "../_ui/Label/Label";
import SpinningPets from "../SpinningPets/SpinningPets";
import './Footer.css';

class Footer extends Component {

    trackEvent = (action) => {
        ReactGA.event({
            category: 'User',
            action: action
        });
    }

    render() {

        return (
            <div className="Footer__container">
                <div className="Footer">
                    <div className="Footer__section Footer__section__links">
                        <Label>
                            <a className="Footer__link"
                                onClick={() => this.trackEvent('Footer | clicked Codepen')}
                                href="http://codepen.io/marguerite"
                                rel="noopener noreferrer" target="_blank">
                                Codepen
                            </a>
                        </Label>
                        <Label>
                            <a className="Footer__link"
                                onClick={() => this.trackEvent('Footer | clicked Github')}
                                href="http://www.github.com/margueriteroth"
                                rel="noopener noreferrer" target="_blank">
                                Github
                            </a>
                        </Label>
                        <Label>
                            <a className="Footer__link"
                                onClick={() => this.trackEvent('Footer | clicked Dribbble')}
                                href="http://www.dribbble.com/marrrguerite"
                                rel="noopener noreferrer" target="_blank">
                                Dribbble
                            </a>
                        </Label>
                        <Label>
                            <a className="Footer__link"
                                onClick={() => this.trackEvent('Footer | clicked Giphy')}
                                href="https://giphy.com/channel/marrrguerite"
                                rel="noopener noreferrer" target="_blank">
                                Giphy
                            </a>
                        </Label>
                    </div>
                    <div className="Footer__section Footer__section__contact">
                        <a href="mailto:marguerite.roth@gmail.com"
                           onClick={() => this.trackEvent('Footer | clicked Contact')}
                           rel="noopener noreferrer" target="_blank">
                            <Button category="secondary--white">
                                Contact
                            </Button>
                        </a>
                    </div>
                </div>
                <div className="Footer__pets">
                    <SpinningPets />
                </div>
                <div className="Footer__copyright__container">
                    <span className="Footer__copyright">
                        &copy; 2019 — </span>
                    <a className="Footer__copyright__link" href="https://github.com/margueriteroth/flagg"
                       onClick={() => this.trackEvent('Footer | clicked Copyright Github link')}
                       rel="noopener noreferrer" target="_blank">
                        Designed and developed by Marguerite Roth
                    </a>
                </div>
            </div>
        );
    }
}

export default Footer;
