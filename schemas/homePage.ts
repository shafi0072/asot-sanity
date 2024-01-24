import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'bannerSubTitle',
      title: 'Banner Sub Title',
      type: 'string',
    }),
    defineField({
      name: 'bannerTitle',
      title: 'Banner Title',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'bannerImage',
      title: 'Banner Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bannerDescription',
      title: 'Banner Description',
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

    // Tech Trends
    defineField({
      name: 'techTrendsTitle',
      title: 'Tech Trends Title',
      type: 'string',
    }),
    defineField({
      name: 'bannerIcons',
      title: 'Banner Icons',
      type: 'array',
      of: [
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),

    // It Service
    defineField({
      name: 'itServiceSubHeading',
      title: 'It Service Sub Heading',
      type: 'string',
    }),
    defineField({
      name: 'itServiceHeading',
      title: 'It Service Heading',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'itServiceDescription',
      title: 'It Service Description',
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
      name: 'itBodyTitle',
      title: 'It Body Title',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'itBodyDescription',
      title: 'It Body Description',
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
      name: 'itServiceImage',
      title: 'It Service Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'itServiceImageGrowth1',
      title: 'It Service Image Growth1',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'itServiceImageGrowth2',
      title: 'It Service Image Growth2',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'itServiceImageGrowth3',
      title: 'It Service Image Growth3',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'itServiceSupport',
      title: 'IT Service Support',
      type: 'array',
      of: [
        {
          name: 'itServiceSupportItem',
          title: 'It Service Support Item',
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
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

    // Technology
    defineField({
      name: 'technologySubHeading',
      title: 'Technology Sub Heading',
      type: 'string',
    }),
    defineField({
      name: 'technologyHeading',
      title: 'Technology Heading',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'technologyDescription',
      title: 'Technology Description',
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
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
    }),

    defineField({
      name: 'technology',
      title: 'Technology',
      type: 'array',
      of: [
        {
          name: 'technologyItem',
          title: 'technology Item',
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
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
    defineField({
      name: 'bottomText',
      title: 'Bottom Text',
      type: 'string',
    }),
    defineField({
      name: 'bottomLinkText',
      title: 'Bottom Link Text',
      type: 'string',
    }),

    //Technology Challenges
    defineField({
      name: 'tChallengesSubHeadings',
      title: 'T Challenges Sub Headings',
      type: 'string',
    }),
    defineField({
      name: 'tChallengesHeadings',
      title: 'T Challenges Headings',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'tChallengesDescriptions',
      title: 'T Challenges Descriptions',
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
      name: 'countOne',
      title: 'Count One',
      type: 'number',
    }),

    defineField({
      name: 'unit1',
      title: 'Unit1',
      type: 'string',
    }),

    defineField({
      name: 'technologyChallenges1',
      title: 'Technology Challenges1',
      type: 'string',
    }),

    defineField({
      name: 'countTwo',
      title: 'Count Two',
      type: 'number',
    }),

    defineField({
      name: 'unit2',
      title: 'Unit2',
      type: 'string',
    }),

    defineField({
      name: 'technologyChallenges2',
      title: 'Technology Challenges2',
      type: 'string',
    }),

    defineField({
      name: 'countThree',
      title: 'Count Three',
      type: 'number',
    }),

    defineField({
      name: 'unit3',
      title: 'Unit3',
      type: 'string',
    }),

    defineField({
      name: 'technologyChallenges3',
      title: 'Technology Challenges3',
      type: 'string',
    }),

    // News
    defineField({
      name: 'newsSubHeading',
      title: 'News Sub Heading',
      type: 'string',
    }),
    defineField({
      name: 'newsHeading',
      title: 'News Headings',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'newsDescriptions',
      title: 'News Descriptions',
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

    // Partner
    defineField({
      name: 'partnerSubHeading',
      title: 'Partner SubHeading',
      type: 'string',
    }),
    defineField({
      name: 'partnerHeading',
      title: 'Partner Heading',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'partnerDescription',
      title: 'Partner Description',
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
      name: 'partnership',
      title: 'Partnership',
      type: 'array',
      of: [
        {
          name: 'partnershipItem',
          title: 'Partnership Item',
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
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

    // FAQ
    defineField({
      name: 'faqTitle',
      title: 'Faq Title',
      type: 'string',
    }),
    defineField({
      name: 'faqImage1',
      title: 'Faq Image1',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'faqImage2',
      title: 'Faq Image2',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'faqImage3',
      title: 'Faq Image3',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'faqImage4',
      title: 'Faq Image4',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'faqs',
      title: 'Faqs',
      type: 'array',
      of: [
        {
          name: 'faqsItem',
          title: 'Faqs Item',
          type: 'object',
          fields: [
            {
              name: 'question',
              title: 'Question',
              type: 'string',
            },
            {
              name: 'answer',
              title: 'Answer',
              type: 'string',
            },
          ],
        },
      ],
    }),

    // It Audit
    defineField({
      name: 'itAuditSubHeading',
      title: 'It Audit Sub Heading',
      type: 'string',
    }),
    defineField({
      name: 'itAuditHeading',
      title: 'It Audit Heading',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'itAuditImage',
      title: 'It Audit Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'itAuditDescription',
      title: 'It Audit Description',
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
      name: 'itAuditButtonText',
      title: 'It Audit Button Text',
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
