const schema = {
  name: 'resource',
  title: 'Resource',
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
      name: 'shortdescription',
      title: 'Short Description',
      type: 'string',
      require,
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of:[{ type: 'block' }],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' }
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
      name: 'technology',
      title: 'Technology',
      type: 'array',
      of: [{type: 'string'}]
      
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
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      options: {
        list: ['frontend', 'backend', 'fullstack', 'mobile']
      }
    }
  ]
}

export default schema;
