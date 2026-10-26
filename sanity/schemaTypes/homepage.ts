import { defineField, defineType } from "sanity";

export const homepage = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({
      name: "heroProjects",
      title: "Hero Carousel Projects",
      type: "array",
      of: [{ type: "reference", to: [{ type: "project" }] }],
    }),
    defineField({
      name: "aboutHeading",
      title: "About Heading",
      type: "string",
    }),
    defineField({
      name: "aboutBody",
      title: "About Body",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "capabilities",
      title: "Core Capabilities",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", type: "string", title: "Title" }),
            defineField({
              name: "description",
              type: "text",
              title: "Description",
              rows: 3,
            }),
          ],
          preview: {
            select: { title: "title" },
          },
        },
      ],
    }),
    defineField({
      name: "trustedClients",
      title: "Trusted Clients",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "name", type: "string", title: "Name" }),
            defineField({
              name: "logo",
              type: "image",
              title: "Logo",
              options: { hotspot: true },
            }),
          ],
          preview: {
            select: { title: "name", media: "logo" },
          },
        },
      ],
    }),
  ],
});
