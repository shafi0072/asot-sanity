import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'navbar',
  title: 'Navbar',
  type: 'document',
  fields: [
    // Logo
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    // Navbar Menu
    defineField({
      name: 'navMenu',
      title: 'Nav Menu',
      type: 'array',
      of: [
        {
          name: 'navMenuItem',
          title: 'Nav Menu Item',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'url',
              title: 'URL',
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
              name: 'DROPDOWN',
              title: 'DROPDOWN',
              type: 'array',
              of: [
                {
                  name: 'DROPDOWNItem',
                  title: 'DROPDOWN Item',
                  type: 'object',
                  fields: [
                    {
                      name: 'title',
                      title: 'Title',
                      type: 'string',
                    },
                    {
                      name: 'url', // New field for URL
                      title: 'URL',
                      type: 'string',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),

    // Navbar End
    defineField({
      name: 'navItem',
      title: 'Nav Item',
      type: 'array',
      of: [
        {
          name: 'navItemItem',
          title: 'Nav Item Item',
          type: 'object',
          fields: [
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
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
