import {defineField, defineType} from 'sanity'

export const videoType = defineType({
  name: 'video',
  title: 'Cloudinary Videos',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
    }),
    defineField({
      name: 'url',
      type: 'url',
      title: 'URL',
      validation: (Rule) =>
        Rule.required()
          .uri({scheme: ['https']})
          .error('Video URL is required and must be HTTPS'),
    }),
    defineField({
      name: 'poster',
      type: 'url',
      title: 'Poster URL',
      validation: (Rule) => Rule.uri({scheme: ['https']}),
    }),
    defineField({
      name: 'order',
      type: 'number',
      title: 'Order',
      description: 'Manual order for display',
      validation: (Rule) => Rule.integer().min(0).error('Order must be a non-negative integer'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
  orderings: [
    {
      title: 'Title, A-Z',
      name: 'titleAsc',
      by: [{field: 'title', direction: 'asc'}],
    },
    {
      title: 'Title, Z-A',
      name: 'titleDesc',
      by: [{field: 'title', direction: 'desc'}],
    },
    {
      title: 'Description, A-Z',
      name: 'descriptionAsc',
      by: [{field: 'description', direction: 'asc'}],
    },
    {
      title: 'Description, Z-A',
      name: 'descriptionDesc',
      by: [{field: 'description', direction: 'desc'}],
    },
    {
      title: 'Manual Order, Low to High',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
    {
      title: 'Manual Order, High to Low',
      name: 'orderDesc',
      by: [{field: 'order', direction: 'desc'}],
    },
  ],
})
