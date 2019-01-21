import React, { Component } from 'react';
import classNames from 'classnames';
import headshot from "./marguerite.jpg";
//import PropTypes from 'prop-types';

import './Avatar.css';

class Avatar extends Component {

    render() {
        const { className } = this.props;
        return (
            <div className={classNames("Avatar__container", className)}>
                <img className="Avatar" src={headshot} alt="Marguerite Roth holding her dog, Oscar." />
            </div>
        );
    }
}

export default Avatar;