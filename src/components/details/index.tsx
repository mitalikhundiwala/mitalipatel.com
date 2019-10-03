import React from 'react';

import './details.scss';

const Detailsomponent = () => {
    return (
        <div className="details">
            <div className="row section">
                <div className="col-12 col-md-3 section-heading">
                    <h2>Summary</h2>
                </div>
                <div className="col-12 col-md-9  section-body">
                    <p>
                        A <em>Front-end Developer</em>, who has worked on responsive and maintainable applications powered by Web Technologies using <em>ES 2015+/TypeScript</em> and <em>SASS</em> which works across platforms and devices as Single-page Web
                        Apps & Hybrid Mobile Apps with Cordova. My experience is in <em>Backbone.js</em>, <em>Angular</em>, <em>AngularJS</em>, <em>jQuery</em> and <em>Bootstrap</em> as Front-end frameworks. With my past in PHP-MySQL, I have a good
                        understanding of Back-ends as well.
                    </p>
                </div>
            </div>
            <div className="row section">
                <div className="col-12 col-md-3 section-heading">
                    <h2>Skills</h2>
                </div>
                <div className="col-12 col-md-9  section-body">
                    <ul className="skills-list">
                        <li>Interactive UIs using ES 2015+/TypeScript</li>
                        <li>Backbone.js, Angular (v2), AngularJS, Bootstrap & jQuery</li>
                        <li>SASS and CSS</li>
                        <li>RESTful Services Development using PHP</li>
                        <li>Back-end MVC Frameworks (i.e. CodeIgniter & FuelPHP)</li>
                        <li>Experience with NoSQL storage engine - MongoDB</li>
                    </ul>
                </div>
            </div>
            <div className="row section">
                <div className="col-12 col-md-3 section-heading">
                    <h2>Experience</h2>
                </div>
                <div className="col-12 col-md-9  section-body">
                    <div className="experience">
                        <h3>
                            <span className="company-name">Property Finder</span> as a <span className="position">Front-end Developer</span>
                        </h3>
                        <span className="duration">May ’17 – March ‘19 (1 Year 11 Months)</span>
                        <p>
                            Worked as a <em>Front-end Developer</em> on one of the partner applications which is used to obtain leads and convert leads to customers for real estate properties.
                        </p>
                        <p>
                            The product was built as a <em>Responsive Web-app on Backbone.js</em>, and also had a <em>Hybrid Mobile Application using Cordova</em>, allowing agencies to work across platforms.
                        </p>
                        <p>
                            Apart from my profile as a Front-end Developer, I was also part of the team who has worked on integrating <em>third-party services like Cronofy and Firebase</em> - for real-time database and push notifications - which has
                            resulted in simplified architecture of Back-end services.
                        </p>
                    </div>
                    <div className="experience">
                        <h3>
                            <span className="company-name">CodeArray Technologies Pvt. Ltd.</span> as a Consultant <span className="position">Front-end Developer</span>
                        </h3>
                        <span className="duration">May ’16 – May ‘17 (10 Months)</span>

                        <p>
                            After moving to Dubai, I started working as a <em>Front-end Development Consultant</em>. The project was technical refresh of a Medical Facility Management System and to make it future ready.
                        </p>
                        <p>
                            I played a <em>key role in making team competent in Angular</em>, starting development while it was still in beta stage and integrate it with other frameworks like Bootstrap. I have also setup{' '}
                            <em>Continuous Deployment process</em>. As an experienced developer, I have also helped the team doing API design and implementing best practices.
                        </p>
                    </div>
                    <div className="experience">
                        <h3>
                            <span className="company-name">Prorigo Software Pvt. Ltd.</span> as a <span className="position">Sr. Software Engineer</span>
                        </h3>
                        <span className="duration">September ’13 – April ‘16 (2 Years, 6 Months)</span>

                        <p>
                            I've joined Prorigo as a PHP developer for working in Terapeak, an e-commerce analytics product, on its <em>PHP-based UI Layer</em>. Later, I've worked on a sibling project, MMI, a <em>single page application</em>, where the UI
                            was created using JavaScript and HTML technologies. This project has given me opportunity for my <em>transition to be a UI developer</em> working solely on HTML technologies along with libraries and frameworks like{' '}
                            <em>JQuery, Bootstrap, Nunjucks</em> etc. Moving further as a UI Developer, I worked on an interactive application built with <em>Angular and SVG</em>, for a real estate project, and also helped teams on JavaScript
                            implementations on other projects.
                        </p>
                    </div>
                    <div className="experience">
                        <h3>
                            <span className="company-name">PIXML Solutions</span> as a <span className="position">Software Engineer</span>
                        </h3>
                        <span className="duration">June ’12 – April ‘13 (11 Months)</span>

                        <p>
                            Worked in this startup as a <em>PHP Web Developer</em>. Here I have worked on applications involving Facebook Graph API, created a custom CMS based on <em>FuelPHP</em>, worked on a data visualization and reporting application on
                            RESTful architecture. I have also done a project involving Magento theming and created a <em>custom eCommerce application</em> using knowledge gained by working on Magento.
                        </p>
                    </div>
                    <div className="experience">
                        <h3>
                            <span className="company-name">Avinashi Systems Pvt. Ltd</span> as a <span className="position">Software Engineer</span>
                        </h3>
                        <span className="duration">September ’09 – March ‘12 (1 Year, 6 Months) - May ’12 – April ’13 (11 Months)</span>

                        <p>
                            Worked here as a <em>Lead PHP Developer</em>, handling server-side pie for some of the prominent products of Avinashi. I’ve worked on vast varieties of projects here - from back-end only services to the mix of UI and Server-side
                            projects. I’ve also <em>made a customized CMS</em> for Avinashi that was used for creating many websites, quickly.
                        </p>
                    </div>
                </div>
            </div>

            <div className="row section">
                <div className="col-12 col-md-3 section-heading">
                    <h2>Education</h2>
                </div>
                <div className="col-12 col-md-9  section-body">
                    <h3>First Class in B.E. with Computer Science</h3>
                    <div>From Veer Narmad South Gujarat University, Surat, India.</div>
                    <div>Grade: First Class| Year of Passing: 2009</div>
                </div>
            </div>
        </div>
    );
};

export default Detailsomponent;
