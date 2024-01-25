import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'caseStudies',
  title: 'Case Studies',
  type: 'document',
  fields: [
    defineField({
      name: 'caseStudiesBannerSubHeading',
      title: 'Case Studies Banner SubHeading',
      type: 'string',
    }),
    defineField({
      name: 'caseStudiesBannerHeading',
      title: 'Case Studies Banner Heading',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'caseStudiesBannerDescription',
      title: 'Case Studies Banner Description',
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
      name: 'caseStudyData',
      title: 'Case Study Data',
      type: 'array',
      of: [
        {
          name: 'caseStudyDataItem',
          title: 'Case Study Data Item',
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
              name: 'imageIcon',
              title: 'Image Icon',
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
                      name: 'headline',
                      title: 'Headline',
                      type: 'string',
                    },
                    {
                      name: 'bio',
                      title: 'Bio',
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
                      name: 'challenges',
                      title: 'Challenges',
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
                      name: 'solution',
                      title: 'Solution',
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
                      name: 'results',
                      title: 'Results',
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
