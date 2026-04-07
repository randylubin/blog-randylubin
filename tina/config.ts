import { defineConfig } from "tinacms";

export default defineConfig({
  branch:
    process.env.TINA_BRANCH ||
    process.env.HEAD ||
    "master",

  clientId: process.env.TINA_CLIENT_ID || "297cf63d-ad73-4084-a841-6ad39449a04b",
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "./",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Blog Posts",
        path: "_posts",
        format: "md",
        ui: {
          filename: {
            readonly: false,
            slugify: (values) => {
              const date = values?.date
                ? new Date(values.date).toISOString().split("T")[0]
                : new Date().toISOString().split("T")[0];
              const slug = (values?.title || "untitled")
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)/g, "");
              return `${date}-${slug}`;
            },
          },
        },
        defaultItem: () => ({
          layout: "post",
          template: "post",
          published: true,
          date: new Date().toISOString(),
        }),
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "boolean",
            name: "published",
            label: "Published",
          },
          {
            type: "string",
            name: "description",
            label: "Description",
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
          },
          {
            type: "string",
            name: "layout",
            label: "Layout",
            options: ["post", "page", "default"],
          },
          {
            type: "string",
            name: "template",
            label: "Template",
            options: ["post", "page"],
          },
          {
            type: "string",
            name: "permalink",
            label: "Permalink",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "page",
        label: "Pages",
        path: "/",
        match: {
          include: "{about,index,404}",
        },
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "layout",
            label: "Layout",
          },
          {
            type: "string",
            name: "permalink",
            label: "Permalink",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
