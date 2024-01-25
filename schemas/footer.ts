import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'footerLogo',
      title: 'Footer Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'footerHeading',
      title: 'Footer Heading',
      type: 'string',
    }),
    defineField({
      name: 'footerHeadingURL',
      title: 'Footer Heading URL',
      type: 'string',
    }),
    defineField({
      name: 'footerOurCompany',
      title: 'Footer Our Company',
      type: 'string',
    }),
    defineField({
      name: 'footerOurCompanyLinks1',
      title: 'Footer Our Company Links1',
      type: 'array',
      of: [
        {
          name: 'footerOurCompanyLinks1Item',
          title: 'Footer Our Company Links1 Item',
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
          ],
        },
      ],
    }),
    defineField({
      name: 'footerOurCompanyLinks2',
      title: 'Footer Our Company Links2',
      type: 'array',
      of: [
        {
          name: 'footerOurCompanyLinks2Item',
          title: 'Footer Our Company Links2 Item',
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
          ],
        },
      ],
    }),
    defineField({
      name: 'footerContactInfo',
      title: 'Footer Contact Info',
      type: 'string',
    }),
    defineField({
      name: 'footerAvatar',
      title: 'Footer Avatar',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'chatWithAnExpert',
      title: 'Chat With An Expert',
      type: 'array',
      of: [
        {
          name: 'chatWithAnExpertItem',
          title: 'Chat With An Expert Item',
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
          ],
        },
      ],
    }),

    defineField({
      name: 'offlineNow',
      title: 'Offline Now',
      type: 'string',
    }),

    defineField({
      name: 'contactInfoCallAndMessage',
      title: 'Contact Info Call And Message',
      type: 'array',
      of: [
        {
          name: 'contactInfoCallAndMessageItem',
          title: 'Contact Info Call And Message Item',
          type: 'object',
          fields: [
            defineField({
              name: 'imageIcon',
              title: 'Image Icon',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
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
          ],
        },
      ],
    }),

    defineField({
      name: 'footerKeepInTouch',
      title: 'Footer Keep In Touch',
      type: 'string',
    }),
    defineField({
      name: 'footerKeepInTouchTitle',
      title: 'Footer Keep In Touch Title',
      type: 'string',
    }),
    defineField({
      name: 'termsAndCondition',
      title: 'Terms And Condition',
      type: 'string',
    }),
    defineField({
      name: 'copyright',
      title: 'Copyright',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
