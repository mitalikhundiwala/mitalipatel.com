module.exports = {
    siteMetadata: {
        title: `Mitali Patel - Front-end Developer`,
        description: `A Front-end Developer developing modern web apps with HTML technologies for more than 8 years`,
        author: `@ilatim`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Mitali Patel`,
                short_name: `Mitali Patel`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#E27D60`,
                display: `minimal-ui`,
            }
        },
        {
            resolve: `gatsby-plugin-typescript`,
            options: {
                isTSX: true,
                allExtensions: true
            }
        },
        `gatsby-plugin-sass`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        `gatsby-plugin-offline`
    ]
};
