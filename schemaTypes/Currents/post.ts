import { defineField, defineType } from 'sanity';
import { ImBlogger2 } from 'react-icons/im';
import { CharacterCounter } from '../../components/ChatacterCount';

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: ImBlogger2,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => [Rule.required().error('Title is required.')],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      components: {
        input: CharacterCounter,
      },
      description: 'The description of the website, used for SEO and social media sharing. (Aim for 80 - 160 characters)',
      validation: rule => rule.min(80).max(180).warning('Your description should be between 80-180 characters - Google recommends around 160 characters')
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
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'person' }],
      validation: Rule => [Rule.required().error('A post has to have an author.')],
    }),
    {
      name: 'image',
      title: 'Image',
      validation: Rule => Rule.required().error('Image is required'),
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
        },
        {
          name: 'aspectRatio',
          title: 'Aspect Ratio',
          type: 'number',
          options: {
            list: [
              { title: '16:9', value: 16/9 },
              { title: '4:3', value: 4/3 },
              { title: '1:1', value: 1/1 },
              { title: '2:3', value: 2/3 },
              { title: '3:2', value: 3/2 },
              { title: '3:4', value: 3/4 },
              { title: '9:16', value: 9/16 },
            ],
          },
        }
      ],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'content',
      title: 'Content',
      type: 'content',
      validation: Rule => [Rule.required().error('A post has to have content.')],
    },
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'content',
      validation: Rule => [Rule.required().error('A blog groups has to have an excerpt.')],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: Rule => [Rule.required().error('A post has to have a publish date.')],
    }),
    
  ],

  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
});
