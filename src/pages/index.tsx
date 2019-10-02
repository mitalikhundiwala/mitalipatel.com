import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import SummaryComponent from '../components/summary';
import DetailsComponent from '../components/details';

const IndexPage = () => (
    <Layout>
        <SEO title="" />
        <div className="">
            <div className="row no-gutters">
                <div className="col-6">
                    <SummaryComponent></SummaryComponent>
                </div>
                <div className="col-6">
                    <DetailsComponent></DetailsComponent>
                </div>
            </div>
        </div>
    </Layout>
);

export default IndexPage;
