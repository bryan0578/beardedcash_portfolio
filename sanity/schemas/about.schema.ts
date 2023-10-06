const schema = {
    name: "about",
    title: "About",
    type: "document",
    fields: [
      {
        name: "aboutImage",
        title: "About Image",
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
        name: "contentP2",
        title: "Content Text",
        type: "string"
      },
      {
        name: "addSubHeader",
        title: "Additional SubHeader Text",
        type: "string"
      },
      {
        name: "addContent",
        title: "Additional Content Text",
        type: "string"
      },
      {
        name: "addContentP2",
        title: "Additional Content Text",
        type: "string"
      },
      {
        name: "socialLinks",
        title: "Social Links",
        type: "array",
        of: [
          {
            type: "object",
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
                {
                  name: "mailTo",
                  title: "Mail To",
                  type: "string"
                }
            ]
          }
        ]
      },
      {
        name: "skillsSubHeader",
        title: "Skills SubHeader Text",
        type: "string"
      },
      {
        name: "skills",
        title: "Skills",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
                {
                    name: "title",
                    title: "Skill Title",
                    type: "string"
                },
                {
                    name: "value",
                    title: "Skill Value",
                    type: "number"
                },
            ]
          }
        ]
      },
      
      
    ]
  }
  
export default schema;