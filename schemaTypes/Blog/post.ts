import { defineField, defineType } from 'sanity';
import { ImBlogger2 } from 'react-icons/im';

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: ImBlogger2,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Your post should have a title. This will be displayed on the post preview card.',
      type: 'string',
      validation: Rule => [Rule.required().error('Title is required.')],
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      description: 'Slug creates a navigation path to your post.',
      type: 'slug',
      validation: Rule => [Rule.required().error('A post without a slug can not be navigated to.')],
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      description: 'This image will be shown in the preview card for your post.',
      type: 'image',
      validation: Rule => [Rule.required().error('Main image is required.')],
      options: {
        hotspot: true,
      },
    }),
    {
      name: 'content',
      title: 'Content',
      type: 'content',
    },
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      validation: Rule => [Rule.required().error('A blog post has to have an excerpt.')],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
});
