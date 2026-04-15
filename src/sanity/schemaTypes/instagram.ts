import {defineField, defineType} from 'sanity'

export const instagramType = defineType({
  name: 'instagramEmbed',
  title: 'Instagram Post/Reel',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal SEO Title',
      type: 'string',
      description: 'Used for accessibility screen readers and internal tracking (e.g. "Graduation video"). Will not be visible on the card.',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Instagram URL',
      type: 'url',
      description: 'Paste the link to the post or reel here (e.g., https://www.instagram.com/p/Cxa..../)',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Post Thumbnail Image',
      type: 'image',
      options: {
        hotspot: true, // Allows the editor to crop/focus the image
      },
      description: 'Upload a beautiful screenshot or thumbnail of the Instagram post. This will be shown on the website grid.',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Date Added',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      description: 'This is used to sort the posts in the grid.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'url',
    }
  }
})
