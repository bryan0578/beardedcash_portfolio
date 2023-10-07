const schema = {
    name: "contact",
    title: "Contact",
    type: "document",
    fields: [
      {
        name: "contactImage",
        title: "Contact Image",
        type: "image",
        options: {
          metadata: ["lqip"]
        }
      },
      {
        name: "altTag",
        title: "Contact Alt Tag",
        type: "string"
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
        name: "emailLabel",
        title: "EmailLabel",
        type: "string"
      },
      {
        name: "emailText",
        title: "Email Text",
        type: "string"
      },
      {
        name: "contactMailTo",
        title: "Contact Mail To",
        type: "string"
      },
      {
        name: "follow",
        title: "Follow Me Text",
        type: "string"
      }, 
    ]
  }
  
export default schema;