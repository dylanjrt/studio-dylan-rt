import {defineField, defineType} from 'sanity'

export const musicType = defineType({
  name: 'music',
  title: 'Music',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title is required'),
    }),
    defineField({
      name: 'artist',
      title: 'Artist',
      type: 'string',
      validation: (Rule) => Rule.required().error('Artist is required'),
    }),
    defineField({
      name: 'albumCover',
      title: 'Album Cover',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error('Album cover is required'),
    }),
    defineField({
      name: 'releaseDate',
      title: 'Release Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
      validation: (Rule) => Rule.required().error('Release date is required'),
    }),
    defineField({
      name: 'bandcampEmbed',
      title: 'Bandcamp Embed URL',
      type: 'url',
      description:
        'The src URL from Bandcamp embed code (e.g., https://bandcamp.com/EmbeddedPlayer/album=1708085623/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/)',
      validation: (Rule) =>
        Rule.required()
          .uri({scheme: ['http', 'https']})
          .error('Bandcamp embed URL is required'),
    }),
    defineField({
      name: 'description',
      title: 'Album Description',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Description of the album, its style, or background',
    }),
    defineField({
      name: 'credits',
      title: 'Credits',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Credits for the album',
    }),
    defineField({
      name: 'supplementaryPhotos',
      title: 'Supplementary Photos',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              description: 'Caption for this image',
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: 'Important for SEO and accessibility',
            },
          ],
        },
      ],
      description: 'Additional photos related to this music release',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'albumCover',
      releaseDate: 'releaseDate',
    },
    prepare({title, media, releaseDate}) {
      return {
        title: title || 'Untitled Release',
        subtitle: releaseDate ? new Date(releaseDate).getFullYear().toString() : '',
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Release Date, New → Old',
      name: 'releaseDateDesc',
      by: [{field: 'releaseDate', direction: 'desc'}],
    },
    {
      title: 'Release Date, Old → New',
      name: 'releaseDateAsc',
      by: [{field: 'releaseDate', direction: 'asc'}],
    },
    {
      title: 'Title, A-Z',
      name: 'titleAsc',
      by: [{field: 'title', direction: 'asc'}],
    },
  ],
})
