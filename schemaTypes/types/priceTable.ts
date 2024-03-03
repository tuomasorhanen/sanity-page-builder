import { defineField } from 'sanity';

const PriceTable = defineField({
  name: 'priceTable',
  title: 'priceTable',
  type: 'object',
  fields: [
    defineField({
      name: 'location',
      title: 'Location',
      description: 'Location for this price option',
      type: 'string',
      options: {
        list: ['Tampere', 'Pirkkala', 'Lielahti', 'All'],
      },
    }),
    defineField({
      name: 'service',
      title: 'Service',
      description: 'Add a service.',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
    }),
  ],
});

export default PriceTable;
