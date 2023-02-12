import { defineType, defineField } from "sanity";

export default defineType({
  name: 'issue',
  title: 'Issue',
  type: 'document',
  fields: [
    defineField({
      name: 'issueNumber',
      title: 'Issue Number',
      type: 'number'
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'string'
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text'
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
    }),
  ],

  preview: {
    select: {
      title: 'issueNumber',
      media: 'coverImage',
    },
  }
})