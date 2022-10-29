export default {
    name: "trainer",
    title: "Trainer",
    type: "document",
    fields: [
      {
        name: "name",
        type: "string",
        title: "Trainer name",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "short_description",
        type: "string",
        title: "short Description",
        validation: (Rule) => Rule.max(200),
      },
      {
        name: "experience",
        type: "string",
        title: "Experience",
        validation: (Rule) => Rule.max(200),
      },
      {
        name: "image",
        type: "image",
        title: "Image of the Restaurant",
      },
      {
        name: "rating",
        type: "string",
        title: "Enter a Rating from (1-5 Starts)",
        validation: (Rule) =>
          Rule.required()
            .min(1)
            .max(5)
            .error("please enter a Valure between 1 and 5"),
      },
      {
        name: "category",
        type: "array",
        title: "Category",
        of: [{ type: "reference", to: [{ type: "category" }] }],
      },
      {
        name: "class",
        type: "array",
        title: "Classes",
        of: [{ type: "reference", to: [{ type: "slot" }] }],
      },
    ],
  };
  