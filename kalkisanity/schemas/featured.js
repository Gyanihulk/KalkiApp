export default {
  name: "featured",
  type: "document",
  title: "Featured Trainers",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Featured Category name",
      validation: (Rule) => Rule.required(),
    },
      {
        name: "trainer",
        type: "array",
        title: "Trainer",
        of:[{type:"reference",to:[{type:"trainer"}]}],
      },
  ],
};
