const schema = {
    name: "nav",
    title: "Navigation",
    type: "document",
    fields: [
      {
        name: "logo",
        title: "Logo",
        type: "image",
        options: {
          metadata: ["lqip"]
        }
      },
      {
        name: "navLinks",
        title: "Navigation Links",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              {
                name: "label",
                title: "Label",
                type: "string"
              },
              {
                name: "url",
                title: "URL",
                type: "string"
              }
            ]
          }
        ]
      }
    ]
  }
  
export default schema;