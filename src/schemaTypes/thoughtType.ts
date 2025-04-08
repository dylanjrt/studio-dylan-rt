import {defineField, defineType} from 'sanity'

export const thoughtType = defineType({
  name: 'thought',
  title: 'Thoughts',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {type: 'block'},
        {type: 'image'},
        {
          type: 'file',
          name: 'video',
          title: 'Video',
          options: {
            accept: 'video/*',
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              description: 'Optional caption for the video',
            },
            {
              name: 'autoplay',
              type: 'boolean',
              title: 'Autoplay',
              description: 'Should the video autoplay when the page loads?',
              initialValue: false,
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      blocks: 'content',
    },
    prepare(value: {title?: string; blocks?: any[]}) {
      const {title, blocks} = value

      // If there's a title, use it
      if (title) return {title}

      // Otherwise, extract text from the first block
      const block = (blocks || []).find((block: any) => block._type === 'block')
      return {
        title: block
          ? block.children
              .filter((child: any) => child._type === 'span')
              .map((span: any) => span.text)
              .join('')
          : 'No title',
      }
    },
  },
})
