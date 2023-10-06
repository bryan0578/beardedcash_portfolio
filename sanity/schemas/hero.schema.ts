const schema = {
    name: "hero",
    title: "Hero",
    type: "document",
    fields: [
      {
        name: "heroImage",
        title: "Hero Image",
        type: "image",
        options: {
          metadata: ["lqip"]
        }
      },
      {
        name: "header",
        title: "Header Text",
        type: "string"
      },
      {
        name: "subHeader",
        title: "Sub Header Text",
        type: "string"
      },
      {
        name: "content",
        title: "Content Text",
        type: "string"
      },
      {
        name: "button",
        title: "Button Text",
        type: "string"
      }
    ]
  }
  
export default schema;