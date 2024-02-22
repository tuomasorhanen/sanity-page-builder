import { defineField } from 'sanity';

const PriceTable = defineField({
  name: 'priceTable',
  title: 'priceTable',
  type: 'object',
  fields: [
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
