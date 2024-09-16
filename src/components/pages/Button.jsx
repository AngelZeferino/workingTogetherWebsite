import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';


export const Button = ({children, type, onClick, buttonStyle, buttonSize }) => {
    const STYLES = ['btn--primary', 'btn--outlines']
    const SIZES = ['btn--medium', 'btn--large'];
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : STYLES[0]
    return (
        <Link to='/Contact' className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                    onClick={onClick}
                    type={type}>
                {children}
            </button>
        </Link>
    );

};