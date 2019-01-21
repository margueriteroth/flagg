import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { Link } from 'react-router-dom';
import Button from "components/_ui/Button/Button";
import Label from "components/_ui/Label/Label";
import NumberTranslatorContainer from "components/Containers/NumberTranslatorContainer";
import classNames from 'classnames';
import './Project.css';

const tech = [
    "react",
    "lodash",
]

class ProjectNumbers extends Component {
    scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    onClick = () => {
        this.trackEvent('NumberTranslator (' + (this.props.isOnHomepage ? 'Home' : 'Page') + ') | clicked through to project Page');
        this.scrollToTop();
    }

    trackEvent = (action) => {
        ReactGA.event({
            category: 'User',
            action: action
        });
    }

    render() {

        return (
            <div className="ProjectNumbers Project__container">
                <div className="Project__info__container">
                    <h2 className="Project__title">
                        Números en español
                    </h2>
                    <div className="Project__about">
                        <p>
                            <Link to="/numeros-en-espanol">
                                <Button category="secondary" target="_blank" onClick={this.onClick}>
                                    Project page
                                </Button>
                            </Link>
                        </p>
                        <p>
                            I am currently learning spanish and one hurdle was understanding
                            (and remembering) number patterns past 100. I built this translator
                            to check numbers I am converting.
                        </p>
                    </div>
                    <div className="Project__tech__section">
                        <Label className="Project__tech__title" category="primary">
                            tools
                        </Label>
                        {Object.keys(tech).map((key) =>
                            <Label className="Project__tech"
                                key={key}
                            >
                                {tech[key]}
                            </Label>
                        )}
                    </div>
                </div>
                <div className={classNames("Project__image__container")}>
                    <NumberTranslatorContainer isOnHomepage />
                </div>
            </div>
        );
    }
}

export default ProjectNumbers;