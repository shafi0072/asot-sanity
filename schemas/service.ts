import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    // All Banner data (service)
    defineField({
      name: 'allServices',
      title: 'All Services',
      type: 'array',
      of: [
        {
          name: 'allServicesItem',
          title: 'All Services Item',
          type: 'object',
          fields: [
            {
              name: 'id',
              title: 'Id',
              type: 'string',
            },
            {
              name: 'iconImage',
              title: 'Icon Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'subTitle',
              title: 'Sub Title',
              type: 'string',
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
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
          ],
        },
      ],
    }),

    // Statistics
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
