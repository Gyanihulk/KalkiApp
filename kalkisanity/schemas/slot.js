export default {
    name: 'slot',
    title: 'Slot',
    type: 'document',
    fields: [
      {
        name:"name",
        type:"string",
        title:"Name of Class",
        validation: (Rule) => Rule.required(),
      },
      {
        name:"short_description",
        type:"string",
        title:"Short Description",
        validation: (Rule) => Rule.max(200),
      },
      {
        name:"price",
        type:"number",
        title:"Price of the Session ",
        validation: (Rule) => Rule.required(),
      },
      {
        name:"duration",
        type:"string",
        title:"Duration of class",
      },
      {
        name:"availableClass",
        type:"datetime",
        title:"Available Slot",
      },
      
      {
        name: "type",
        type: "array",
        title: "Type",
        of: [{ type: "reference", to: [{ type: "category" }] }],
      },
    ],   
  }
  