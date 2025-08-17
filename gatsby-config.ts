import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `supayut-website`,
    siteUrl: `https://www.supayut.com`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Supayut Website`,
        short_name: `Supayut`,
        start_url: `/`,
        background_color: `#0f0f23`,
        theme_color: `#00d4ff`,
        display: `standalone`,
        icon: `src/images/favicon/favicon-32x32.png`,
      },
    },
  ],
}

export default config
