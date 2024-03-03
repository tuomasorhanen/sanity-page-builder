import { defineField } from 'sanity';
import { BsCardText } from 'react-icons/bs';

const Card = defineField({
  name: 'card',
  title: 'Card',
  type: 'object',
  icon: BsCardText,
  fields: [
    {
      name: 'layout',
      title: 'Card Layout',
      type: 'string',
      options: {
        list: [
          { title: 'image-top', value: 'image-top' },
          { title: 'image-bg', value: 'image-bg' },
          { title: 'simple', value: 'simple' },
        ],
        validation: Rule => [Rule.required().error('A layout is required.')],
      },
    },
    {
      name: 'content',
      title: 'Content',
      type: 'content',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      hidden: ({ parent }) => parent?.layout !== 'image-top' && parent?.layout !== 'image-bg',
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
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'landingPage' }] }],
      options: {
        layout: 'grid',
      },
    },
  ],
});

export default Card;
