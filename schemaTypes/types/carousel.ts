export default {
  name: 'carousel',
  title: 'Carousel',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'title',
      type: 'string',
      validation: Rule => [Rule.required().error('Title is required.')],
    },
    {
      name: 'carouselItems',
      title: 'Carousel Items',
      type: 'array',
      of: [{  type: 'object',
      fields: [
       {
        name: 'content',
        title: 'Content',
        type: 'content',
      },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          fields: [
            {
              name: 'alt',
              title: 'Alternative text',
              type: 'string',
            },
          ],
          options: {
            hotspot: true,
          },
        },
        {
          name: 'buttons',
          title: 'Buttons',
          type: 'array',
          of: [{ type: 'reference', to: [{ type: 'landingPage' }] }],
        },
      ], }],
    },
    {
      name: 'opacity',
      title: 'Background Opacity',
      type: 'number',
      options: {
        list: [
          { title: '10', value: 10 },
          { title: '20', value: 20 },
          { title: '30', value: 30 },
          { title: '40', value: 40 },
          { title: '50', value: 50 },
          { title: '75', value: 75 },
          { title: '80', value: 80 },
          { title: '90', value: 90 },
          { title: '100', value: 100 },
        ],
      },
  },
  ],
};
