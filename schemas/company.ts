import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'company',
  title: 'Company',
  type: 'document',
  fields: [
    // Company Banner
    defineField({
      name: 'cBannerTitle',
      title: 'C Banner Title',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'cBannerDescription',
      title: 'C Banner Description',
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
      name: 'cBannerButtonText1',
      title: 'C Banner Button Text1',
      type: 'string',
    }),
    defineField({
      name: 'cBannerButtonText2',
      title: 'C Banner Button Text2',
      type: 'string',
    }),

    // Gallery
    defineField({
      name: 'imageUrls',
      title: 'Image Urls',
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

    // Expertise
    defineField({
      name: 'expertiseSubHeading',
      title: 'Expertise Sub Heading',
      type: 'string',
    }),
    defineField({
      name: 'expertiseHeading',
      title: 'Expertise Heading',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
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
      name: 'expertiseChallenges1',
      title: 'Expertise Challenges1',
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
      name: 'expertiseChallenges2',
      title: 'Expertise Challenges2',
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
      name: 'expertiseChallenges3',
      title: 'Expertise Challenges3',
      type: 'string',
    }),

    // What We Do
    defineField({
      name: 'whatWeDoSubHeading',
      title: 'WhatWeDo Sub Heading',
      type: 'string',
    }),
    defineField({
      name: 'whatWeDoHeading',
      title: 'WhatWeDo Heading',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'whatWeDoImage1',
      title: 'whatWeDo Image1',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'whatWeDoImage2',
      title: 'whatWeDo Image2',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'whatWeDoData',
      title: 'WhatWeDo Data',
      type: 'array',
      of: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
      ],
    }),

    defineField({
      name: 'whatWeDoButtonText1',
      title: 'WhatWeDo Button Text1',
      type: 'string',
    }),
    defineField({
      name: 'whatWeDoButtonText2',
      title: 'WhatWeDo Button Text2',
      type: 'string',
    }),

    //Mission
    defineField({
      name: 'missionData',
      title: 'Mission Data',
      type: 'array',
      of: [
        {
          name: 'missionDataItem',
          title: 'Mission Data Item',
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

    // Member
    defineField({
      name: 'memberSubHeading',
      title: 'Member Sub Heading',
      type: 'string',
    }),
    defineField({
      name: 'memberHeading',
      title: 'Member Heading',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'memberDescription',
      title: 'Member Description',
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
      name: 'teamMembers',
      title: 'Team Members',
      type: 'array',
      of: [
        {
          name: 'teamMembersItem',
          title: 'Team Members Item',
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'role',
              title: 'Role',
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
          ],
        },
      ],
    }),

    // Location
    defineField({
      name: 'locationSubHeading',
      title: 'Location Sub Heading',
      type: 'string',
    }),
    defineField({
      name: 'locationHeading',
      title: 'Location Heading',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'locationData',
      title: 'Location Data',
      type: 'array',
      of: [
        {
          name: 'locationDataItem',
          title: 'Location Data Item',
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

    defineField({
      name: 'locationButtonText1',
      title: 'Location Button Text1',
      type: 'string',
    }),

    defineField({
      name: 'locationButtonText2',
      title: 'Location Button Text2',
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
