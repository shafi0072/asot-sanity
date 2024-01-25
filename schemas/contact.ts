import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField({
      name: 'contactSubHeading',
      title: 'Contact Sub Heading',
      type: 'string',
    }),
    defineField({
      name: 'contactHeading',
      title: 'Contact Heading',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'contactDescription',
      title: 'Contact Description',
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
    {
      name: 'contactImage',
      title: 'Contact Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    defineField({
      name: 'contactDescription2',
      title: 'Contact Description2',
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
    {
      name: 'data1',
      title: 'Data1',
      type: 'array',
      of: [
        {
          name: 'data1Item',
          title: 'Data1 Item',
          type: 'object',
          fields: [
            {
              name: 'iconImage',
              title: 'Icon Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'country',
              title: 'Country',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'data2',
      title: 'Data2',
      type: 'array',
      of: [
        {
          name: 'data2Item',
          title: 'Data2 Item',
          type: 'object',
          fields: [
            {
              name: 'iconImage',
              title: 'Icon Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'country',
              title: 'Country',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
})
