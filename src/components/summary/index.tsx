import React from 'react';

import './summary.scss';

const SummaryComponent = () => {
    return (
        <div className="summary">
            <div className="info">
                <div className="name">Hello, I’M MITALI PATEL</div>
                <div>A Front-end Developer developing modern web apps with HTML technologies for more than 8 years”</div>
                <div className="social-links">
                    <a href="https://www.instagram.com/mitali_tanmay/">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/mitali_tanmay/">
                        <i className="fa fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/mitalikhundiwala">
                        <i className="fa fa-github"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SummaryComponent;
