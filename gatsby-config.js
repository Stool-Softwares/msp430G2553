module.exports = {
    siteMetadata: {
        title: 'msp430',
        author: 'stool softwares',
        description: 'Projects on MSP430 lunchbox',
        siteUrl: 'http://msp430.edydee.xyz',
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'UA-204804641-1',
                head: true,
                anonymize: true,
            },
        },
        'gatsby-plugin-styled-components',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `${__dirname}/content`,
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    `gatsby-remark-relative-images`,
                    {
                        resolve: `gatsby-remark-images`,
                        options: {},
                    },
                    {
                        resolve: `gatsby-remark-vscode`,
                        options: {
                            theme: 'Dark+ (default dark)',
                        },
                    },
                ],
            },
        },
    ],
}
