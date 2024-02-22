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
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: Rule => [Rule.required().error('Title is required.')],
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          validation: Rule =>
            Rule.required().error('Description is required.').max(320).error('Description cannot exceed 320 characters.'),
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
      name: 'carouselTextColor',
      title: 'Text Color',
      type: 'simplerColor',
    },
  ],
};
