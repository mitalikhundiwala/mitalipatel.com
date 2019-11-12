import React from 'react';

import './summary.scss';

const SummaryComponent = () => {
    return (
        <div className="summary">
            <div className="info">
                <div className="greeting"><h1>Namaste, <br /> I’m <span className="name">Mitali Patel</span></h1></div>
                <p className="headline">A Front-end Developer developing modern web apps with HTML technologies for more than 8 years</p>
                <div className="social-links">
                    <a href="https://twitter.com/ilatim" target="_blank">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/khundiwalamitali" target="_blank">
                        <i className="fa fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/mitalikhundiwala" target="_blank">
                        <i className="fa fa-github"></i>
                    </a>
                    <a href="https://ucc832f58322abaa204d680af978.dl.dropboxusercontent.com/cd/0/get/AsO9jJCcpf53464qiAabqaJrUpbo3Y_dD_QBvF2GP6m_R2RGhfu3OvnBxGrP-8NdhsfmFSvwfd3xNtwZ7DWvEkQcGT9PeXs_vIOUdWru_72SW5LUB3r0n2xLkWnAez2t0pI/file" target="_blank">
                        <i className="fa fa-download"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SummaryComponent;
