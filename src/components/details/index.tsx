import React from 'react';

import './details.scss';

const Detailsomponent = () => {
    return (
        <div className="details">
            <div className="d-flex">
                <div className="p-2 flex-grow-1">
                    <h2>Summary</h2>
                </div>
                <div className="p-2">
                    <p>
                        A Front-end Developer, who has worked on responsive and maintainable applications powered by Web Technologies using ES 2015+/TypeScript and SASS which works across platforms and devices as Single-page Web Apps & Hybrid Mobile Apps
                        with Cordova. My experience is in Backbone.js, Angular, AngularJS, jQuery and Bootstrap as Front-end frameworks. With my past in PHP-MySQL, I have a good understanding of Back-ends as well.
                    </p>
                </div>
            </div>
            <div className="d-flex">
                <div className="p-2 flex-grow-1">
                    <h2>Experience</h2>
                </div>
                <div className="p-2">
                    <div>Property Finder as a Front-end Developer</div>
                    <div>May ’17 – March ‘19 (1 Year 11 Months)</div>
                    <p>Worked as a Front-end Developer on one of the partner applications which is used to obtain leads and convert leads to customers for real estate properties.</p>
                    <p>The product was built as a Responsive Web-app on Backbone.js, and also had a Hybrid Mobile Application using Cordova, allowing agencies to work across platforms.</p>
                    <p>
                        Apart from my profile as a Front-end Developer, I was also part of the team who has worked on integrating third-party services like Cronofy and Firebase - for real-time database and push notifications - which has resulted in
                        simplified architecture of Back-end services.
                    </p>

                    <div>CodeArray Technologies Pvt. Ltd. as a Consultant Front-end Developer</div>
                    <div>May ’16 – May ‘17 (10 Months)</div>

                    <p>After moving to Dubai, I started working as a Front-end Development Consultant. The project was technical refresh of a Medical Facility Management System and to make it future ready.</p>
                    <p>
                        I played a key role in making team competent in Angular, starting development while it was still in beta stage and integrate it with other frameworks like Bootstrap. I have also setup Continuous Deployment process. As an experienced
                        developer, I have also helped the team doing API design and implementing best practices.
                    </p>

                    <div>Prorigo Software Pvt. Ltd. as a Sr. Software Engineer</div>
                    <div>September ’13 – April ‘16 (2 Years, 6 Months)</div>

                    <p>
                        I've joined Prorigo as a PHP developer for working in Terapeak, an e-commerce analytics product, on its PHP-based UI Layer. Later, I've worked on a sibling project, MMI, a single page application, where the UI was created using
                        JavaScript and HTML technologies. This project has given me opportunity for my transition to be a UI developer working solely on HTML technologies along with libraries and frameworks like JQuery, Bootstrap, Nunjucks etc. Moving
                        further as a UI Developer, I worked on an interactive application built with Angular and SVG, for a real estate project, and also helped teams on JavaScript implementations on other projects.
                    </p>

                    <div>PIXML Solutions as a Software Engineer</div>
                    <div>June ’12 – April ‘13 (11 Months)</div>

                    <p>
                        Worked in this startup as a PHP Web Developer. Here I have worked on applications involving Facebook Graph API, created a custom CMS based on FuelPHP, worked on a data visualization and reporting application on RESTful architecture.
                        I have also done a project involving Magento theming and created a custom eCommerce application using knowledge gained by working on Magento.
                    </p>

                    <div>Avinashi Systems Pvt. Ltd as a Software Engineer</div>
                    <div>September ’09 – March ‘12 (1 Year, 6 Months) - May ’12 – April ’13 (11 Months)</div>

                    <p>
                        Worked here as a Lead PHP Developer, handling server-side pie for some of the prominent products of Avinashi. I’ve worked on vast varieties of projects here - from back-end only services to the mix of UI and Server-side projects.
                        I’ve also made a customized CMS for Avinashi that was used for creating many websites, quickly.
                    </p>
                </div>
            </div>
            <div className="d-flex">
                <div className="p-2 flex-grow-1">
                    <h2>Skills</h2>
                </div>
                <div className="p-2">
                    <ul>
                        <li> Interactive UIs using ES 2015+/TypeScript</li>
                        <li>Backbone.js, Angular (v2), AngularJS, Bootstrap & jQuery</li>
                        <li>SASS and CSS</li>
                        <li>RESTful Services Development using PHP</li>
                        <li>Back-end MVC Frameworks (i.e. CodeIgniter & FuelPHP)</li>
                        <li>Experience with NoSQL storage engine - MongoDB</li>
                    </ul>
                </div>
            </div>
            <div className="d-flex">
                <div className="p-2 flex-grow-1">
                    <h2>Education</h2>
                </div>
                <div className="p-2">
                    <h3>First Class in B.E. with Computer Science</h3>
                    <div>From Veer Narmad South Gujarat University, Surat, India.</div>
                    <div>Grade: First Class| Year of Passing: 2009</div>
                </div>
            </div>
        </div>
    );
};

export default Detailsomponent;
