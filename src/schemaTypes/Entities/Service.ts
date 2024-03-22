import { defineField, defineType } from 'sanity';

const Service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      description: 'Slug creates a navigation path to your page.',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'name',
      title: 'Name',
      description: 'Name of the service',
      validation: Rule => Rule.required().error('A service has to have a title!'),
      type: 'string',
    }),
    defineField({
      name: 'metadata',
      title: 'Metadata',
      type: 'metadata',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'priceOptions',
      title: 'Price Options',
      description: 'Different price options for the service',
      type: 'array',
      of: [{ type: 'priceOption' }],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'hero',
      options: { collapsible: true, collapsed: true },
      hidden: ({ document }) => !document?.slug,
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'cta' },
        { type: 'headingAndTitle' },
        { type: 'grid' },
        { type: 'faqList' },
        { type: 'contactForm' },
        { type: 'priceTable' },
      ],
      hidden: ({ document }) => !document?.slug,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
});

export default Service;
