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
      validation: Rule => [Rule.required().error('A page without a slug can not be navigated to.')],
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
      name: 'description',
      title: 'Description',
      description: 'Description of the service',
      validation: Rule => Rule.required().error('A service has to have a description!'),
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      description: 'Image of the service',
      validation: Rule => Rule.required().warning('We should have at least one image for each service!'),
      type: 'image',
      options: {
        hotspot: true,
      },
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
      name: 'features',
      title: 'Features',
      description: 'Features of the service. If applicable.',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'hero',
      title: 'Hero',
      validation: Rule => Rule.required(),
      type: 'hero',
      options: { collapsible: true, collapsed: true },
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'cta' },
        { type: 'headingAndTitle' },
        { type: 'uiElement' },
        { type: 'grid' },
        { type: 'spacer' },
        { type: 'faqList' },
        { type: 'carousel' },
        { type: 'contactForm' },
        { type: 'priceTable' },
      ],
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
