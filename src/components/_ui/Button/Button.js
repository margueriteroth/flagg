import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Button.css';

class Button extends Component {
    static propTypes = {
        category: PropTypes.oneOf(['primary', 'secondary', 'secondary--white']),
    };

    static defaultProps = {
        category: 'primary',
    };

    getClassName() {
        const { category, className } = this.props;
        return classNames(className,
            'Button',
            `Button--${category}`
        );
    }

    render() {
        const { category, children, className, ...props } = this.props;
        return (
            <button
                onClick={this.props.onClick}
                className={this.getClassName()}
                {...props} >
                {this.props.children}
            </button>
        );
    }
}

export default Button;