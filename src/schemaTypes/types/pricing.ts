import { defineType, defineField } from 'sanity';

const PriceOption = defineType({
  name: 'priceOption',
  title: 'Price Option',
  type: 'object',
  fields: [
    defineField({
      name: 'location',
      title: 'Location',
      description: 'Location for this price option',
      type: 'reference',
      to: [{ type: 'location' }],
    }),
    defineField({
      name: 'duration',
      title: 'Duration/Session Count',
      description: 'number of given units',
      type: 'number',
    }),
    defineField({
      name: 'unit',
      title: 'Unit',
      description: 'Unit of the duration',
      type: 'string',
      options: {
        list: ['min', 'kertaa'],
      },
    }),
    defineField({
      name: 'price',
      title: 'Price',
      description: 'Price in € for this option',
      type: 'number',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'Description for this price option',
      type: 'string',
    }),
    {
      name: 'button',
      title: 'Button',
      type: 'reference',
      to: [{ type: 'landingPage' }],
    },
  ],
});

export default PriceOption;
