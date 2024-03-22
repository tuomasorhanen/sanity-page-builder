import { defineField } from 'sanity';

const PriceTable = defineField({
  name: 'priceTable',
  title: 'priceTable',
  type: 'object',
  fields: [
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      initialValue: 'default-table',
      options: {
        list: [
          { title: 'default table', value: 'default-table' },
          { title: 'dropdown banner', value: 'dropdown-banner'},
        ],
      },
      validation: Rule => Rule.required().error('A layout is required.'),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      description: 'Location for this price option',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'location' }] }],
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'service',
      title: 'Service',
      description: 'Add a service.',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
    }),
    {
      name: 'animation',
      title: 'Animation',
      type: 'string',
      initialValue: 'none',
      options: {
        list: [
          { title: 'none', value: 'none' },
          { title: 'fade-in', value: 'fade-in' },
        ],
      },
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
});

export default PriceTable;
