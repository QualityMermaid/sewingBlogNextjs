import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: "string", required: true },
    craft: { type: "string", required: true },
    description: { type: "string", required: true },
    images: { type: "string", required: true },
    made: {type: "boolean", required: true},
    finishedbag: { type: "string", required: true },
    link: { type: "string", required: true },

  },
  computedFields: {
    slug: {type: "string", resolve: (post) => post._raw.flattenedPath}
  },
}));

export default makeSource({ contentDirPath: "posts", documentTypes: [Post] });