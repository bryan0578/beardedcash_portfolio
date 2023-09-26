const schema = {
    name: 'faqs',
    title: 'Faqs',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'answer',
        title: 'Answer',
        type: 'string',
      }
    ]
  }
  
  export default schema;