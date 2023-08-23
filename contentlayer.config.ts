import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: "string", required: true },
    type: { type: "string", required: true },
    description: { type: "string", required: true },
    images: { type: "string", required: false },
  },
  computedFields: {
    slug: {type: "string", resolve: (post) => post._raw.flattenedPath}
  },
}));

export default makeSource({ contentDirPath: "posts", documentTypes: [Post] });