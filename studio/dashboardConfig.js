export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6153767e6998d1414413bdfd',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-dwk66igp',
                  apiId: '72e5ef46-5461-4063-a837-86b4151c665b'
                },
                {
                  buildHookId: '6153767e6998d1377313c25c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-pu1aqe1j',
                  apiId: '0986dbc7-793f-4839-a80e-3d8ccc1e73c0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ronaldo888kgs/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-pu1aqe1j.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
