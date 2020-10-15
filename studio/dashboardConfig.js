export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f889a2bcf90b11116b55915',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-nda8juq1',
                  apiId: 'f355693d-7859-4f7e-817f-c3271374ad60'
                },
                {
                  buildHookId: '5f889a2c5ec9190d7e8d82e8',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-msc4umfp',
                  apiId: '77e3fe7e-7952-47fa-b79d-2981f9a152fc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jeffsee55/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-msc4umfp.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
