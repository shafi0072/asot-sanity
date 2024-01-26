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

    // Our Solution
    defineField({
      name: 'solutionSubTitle',
      title: 'Solution Sub Title',
      type: 'string',
    }),
    defineField({
      name: 'solutionTitle',
      title: 'Solution Title',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'solutionDescription',
      title: 'Solution Description',
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
      name: 'ourSolution',
      title: 'Our Solution',
      type: 'array',
      of: [
        {
          name: 'ourSolutionItem',
          title: 'Our Solution Item',
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
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'image1',
              title: 'Image1',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'image2',
              title: 'Image2',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'features1',
              title: 'Features1',
              type: 'array',
              of: [
                {
                  name: 'features1Item',
                  title: 'Features1 Item',
                  type: 'object',
                  fields: [
                    {
                      name: 'title1',
                      title: 'Title1',
                      type: 'string',
                    },
                    {
                      name: 'title2',
                      title: 'Title2',
                      type: 'string',
                    },
                    {
                      name: 'imageIcon1',
                      title: 'Image Icon1',
                      type: 'image',
                      options: {
                        hotspot: true,
                      },
                    },
                    {
                      name: 'imageIcon2',
                      title: 'Image Icon2',
                      type: 'image',
                      options: {
                        hotspot: true,
                      },
                    },
                    {
                      name: 'description1',
                      title: 'Description1',
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
                      name: 'description2',
                      title: 'Description2',
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

    // Benefit
    defineField({
      name: 'benefitSubTitle',
      title: 'Benefit Sub Title',
      type: 'string',
    }),
    defineField({
      name: 'benefitTitle',
      title: 'Benefit Title',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'benefitDescription',
      title: 'Benefit Description',
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
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [
        {
          name: 'benefitsItem',
          title: 'Benefits Item',
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

    // Plan And Pricing
    defineField({
      name: 'pricingSubTitle',
      title: 'Pricing Sub Title',
      type: 'string',
    }),
    defineField({
      name: 'pricingTitle',
      title: 'Pricing Title',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'pricingDescription',
      title: 'Pricing Description',
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
      name: 'pricingButton',
      title: 'Pricing Button',
      type: 'string',
    }),

    defineField({
      name: 'planPricing',
      title: 'Plan Pricing',
      type: 'array',
      of: [
        {
          name: 'planPricingItem',
          title: 'Plan Pricing Item',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'subTitle',
              title: 'Sub Title',
              type: 'string',
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
              name: 'amount',
              title: 'Amount',
              type: 'string',
            },
            {
              name: 'amountTitle',
              title: 'Amount Title',
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
            {
              name: 'isPopular',
              title: 'Is Popular',
              type: 'string',
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
