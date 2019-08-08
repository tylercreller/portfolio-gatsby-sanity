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
                  buildHookId: '5d4b7c97530d0101777af362',
                  title: 'Sanity Studio',
                  name: 'portfolio-gatsby-sanity-studio',
                  apiId: 'f3aaee43-6a53-4ee0-a642-aca66ef2c6fd'
                },
                {
                  buildHookId: '5d4b7c9738b7e6018048d18d',
                  title: 'Portfolio Website',
                  name: 'portfolio-gatsby-sanity',
                  apiId: '3d6330c4-c735-41d7-a013-914e2006b8ff'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tylercreller/portfolio-gatsby-sanity',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://portfolio-gatsby-sanity.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
