import { defineField, defineType } from 'sanity';
import { ImBlogger2 } from 'react-icons/im';

export default defineType({
  name: 'groups',
  title: 'groups',
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
      type: 'string',
      validation: Rule => [Rule.required().error('Description is required.')],
      description: 'Description of the post for seo',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      description: 'Slug creates a navigation path to your groups.',
      type: 'slug',
      validation: Rule => [Rule.required().error('A groups without a slug can not be navigated to.')],
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: Rule => Rule.required().error('Image is required'),
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
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'content',
      validation: Rule => [Rule.required().error('A blog groups has to have an excerpt.')],
    }),
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      validation: Rule => Rule.required().error('Start Date is required.'),
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      validation: Rule => Rule.required().error('End Date is required.'),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'priceOption',
      validation: Rule => Rule.required().error('Price is required.'),
    },
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'headingAndTitle' },
        { type: 'contactForm' },
      ],
      hidden: ({ document }) => !document?.slug,
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
});
