import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'blogBannerHeading',
      title: 'Blog Banner Heading',
      type: 'string',
    }),
    defineField({
      name: 'blogBannerDescription',
      title: 'Blog Banner Description',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    }),

    defineField({
      name: 'blogData',
      title: 'Blog Data',
      type: 'array',
      of: [
        {
          name: 'blogDataItem',
          title: 'Blog Data Item',
          type: 'object',
          fields: [
            {
              name: 'category',
              title: 'Category',
              type: 'string',
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'description',
              title: 'Description',
              type: 'array',
              of: [
                {
                  title: 'Block',
                  type: 'block',
                  styles: [{title: 'Normal', value: 'normal'}],
                  lists: [],
                },
              ],
            },
            {
              name: 'publishDate',
              title: 'Publish Date',
              type: 'string',
            },
            {
              name: 'details',
              title: 'Details',
              type: 'array',
              of: [
                {
                  name: 'detailItem',
                  title: 'Detail Item',
                  type: 'object',
                  fields: [
                    {
                      name: 'description',
                      title: 'Description',
                      type: 'array',
                      of: [
                        {
                          title: 'Block',
                          type: 'block',
                          styles: [{title: 'Normal', value: 'normal'}],
                          lists: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
})
