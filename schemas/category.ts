import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name:"image",
      title:"Upload Image",
      type:"image",
      options:{
        hotspot: true
      }
    }),
    defineField({
      name:"challange",
      title:"Challanges",
      type:"array",
      of: [
        {
          title: 'What is the Challange',
          type: 'text',
        },
      ],
    }),
  ],
})
