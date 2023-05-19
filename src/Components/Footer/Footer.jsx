import React from 'react'
import "./Footer.css";
import { Icon } from '@iconify/react';
const Footer = () => {
    return (
        <>
            <div id="footer">
                <div className="copy-right">
                    <div className="icons-container">
                        <a href="/" target="_blank" rel="noreferrer">
                            <Icon icon="akar-icons:github-fill" color="#000000" />
                        </a>
                        <a href="/" target="_blank" rel="noreferrer">
                            <Icon icon="bi:linkedin" color="#1977cc" />
                        </a>
                    </div>
                    <div className="cr">
                        &copy; Copyright <strong><span>SMRS</span></strong>. All Rights Reserved
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
