const schema = {
    name: "socials",
    title: "Socials",
    type: "document",
    fields: [
      {
        name: "socialIcon",
        title: "Social Icon",
        type: "image",
        options: {
          metadata: ["lqip"]
        }
      },
      {
        name: "altTag",
        title: "ALT Tag",
        type: "string"
      },
      {
        name: "url",
        title: "URL",
        type: "url"
      },
    ]
  }
  
export default schema;