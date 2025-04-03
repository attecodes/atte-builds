export default {
  name: "googleReview",
  title: "Google Review",
  type: "document",
  fields: [
    {
      name: "clientName",
      title: "Client Name",
      type: "string",
      validation: (Rule) => Rule.required().min(3).max(80),
    },
    {
      name: "clientOccupation",
      title: "Client Occupation",
      type: "string",
      validation: (Rule) => Rule.required().min(3).max(80),
    },
    {
      name: "clientImage",
      title: "Client Image (optional)",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "datePublished",
      title: "Date Published",
      description:
        "This is not shown on the website but it is for you to update so the newest reviews will show first on the site",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "review",
      title: "Review",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "stars",
      title: "Stars",
      type: "number",
      validation: (Rule) => Rule.required().min(1).max(5),
    },
  ],

  preview: {
    select: {
      title: "clientName",
    },
  },
};
