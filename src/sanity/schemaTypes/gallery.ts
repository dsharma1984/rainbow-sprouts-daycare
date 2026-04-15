import {defineField, defineType} from 'sanity'

export const galleryType = defineType({
  name: 'gallery',
  title: 'Gallery Image',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image File',
      type: 'image',
      options: {
        hotspot: true, // Enables precise cropping
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Alternative Text (For Screen readers)',
      type: 'string',
      description: 'A brief description of the photo (e.g. "Kids playing in sandbox")',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'General', value: 'general'},
          {title: 'Events', value: 'events'},
          {title: 'Facilities', value: 'facilities'},
        ],
        layout: 'radio'
      },
      initialValue: 'general'
    }),
  ],
})
