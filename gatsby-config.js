module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://david-p-ryan.com/`,
    // Your Name
    name: 'David Ryan',
    // Main Site Title
    title: `David Ryan | CS & Data Science`,
    // Description that goes under your name in main bio
    description: `Student, SWE/Data Scientist in-progress.`,
    // Optional: Twitter account handle
    //author: `@rfitzio`,
    // Optional: Github account URL
    //github: `https://github.com/ryanfitzgerald`, // Add in
    // Optional: LinkedIn account URL
    //linkedin: `https://www.linkedin.com/in/ryanafitzgerald/`,
    // Content of the About Me section
    about: `Hi! I'm studying Computer Science and Feminist, Gender and Sexuality Studies at Stanford University. In school, my focus has been on Natural Language Processing, Machine Learning, and the big data infrastructure and techniques around them. In the past I've researched right-wing social movements, had mixed success in Collegiate eSports, and gone on some lovely hikes.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
//     projects: [
//       {
//         name: 'Devfolio',
//         description:
//           'A zero-config and blazing fast personal site + blog built with GatsbyJs and TailwindCSS',
//         link: 'https://github.com/RyanFitzgerald/devfolio',
//       },
//       {
//         name: 'ChromeExtensionKit',
//         description:
//           'Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates',
//         link: 'https://chromeextensionkit.com/?ref=devfolio',
//       },
//       {
//         name: 'Another Cool Project',
//         description:
//           'Lorem ipsum dolor sit amet consectetur adipisicing elit ducimus perferendis',
//         link: 'https://github.com/RyanFitzgerald/devfolio',
//       },
//     ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Universities Space Research Association - NASA Academic Mission Services',
        description: 'High Performance Computing Intern, September 2021 - Present',
        link: '',
      },
      {
        name: 'Electronic Arts - Respawn Entertainment',
        description: 'Game Analytics Intern - Apex Legends, June 2021 - September 2021',
        link: '',
      },
      {
        name: 'National Consortium for the Study of Terrorism and Responses to Terrorism',
        description: 'Center for the Advanced Study of Language Intern, June 2018 - September 2019',
        link: '',
      },
      {
        name: 'Centers for Disease Control',
        description: 'Technical Team Intern, September 2018 - December 2018',
        link: '',
      },
      {
        name: 'Stanford Sociology Department',
        description: 'Research Assistant, June 2018 - December 2018',
        link: '',
      },
      {
        name: 'Swipecast',
        description: 'Product Management Intern, July 2014 - September 2014',
        link: '',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages',
        description:
          'Python, Java, SQL, Javascript, C++, R, C',
      },
      {
        name: 'Databases',
        description: 'Snowflake, BigQuery, MySQL, MongoDB',
      },
      {
        name: 'Cloud Computing',
        description:
          'Microsoft Azure, Amazon Web Services', 
      },
      {
        name: 'Data Science',
        description:
          'Natural Language Processing, Deep learning (PyTorch), Machine learning, analytics dashboarding with Plotly, Dash and React, data visualization (matplotlib, seaborn, ggplot), Sentiment analysis',
      },
      {
        name: 'Other',
        description:
          'Android Studio, Front-end development with React, Github & Gitlab, Object-oriented design, One-time National Collegiate Hearthstone Quarterfinalist', 
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `projects`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
