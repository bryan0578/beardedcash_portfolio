const schema = {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        require,
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'poster',
        title: 'Poster',
        type: 'image',
        validation: (Rule: any) => Rule.required(),
        options: {
          hotspot: true,
        }
      },
      {
        name: 'shortdescription',
        title: 'Short Description',
        type: 'string',
        require,
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
        require,
        validation: (Rule: any) => Rule.required()
      }, 
      {
        name: 'technology',
        title: 'Technology',
        type: 'array',
        of: [{type: 'string'}]
        
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
        validation: (Rule: any) => Rule.required(),
        options: {
          list: ['frontend', 'backend', 'fullstack', 'mobile']
        }
      },
      {
        name: 'gitHub',
        title: 'Github',
        type: 'string',
      },
      {
        name: 'liveLink',
        title: 'Live Link',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: { source: 'title' }
      },

    ]
  }
  
  export default schema;