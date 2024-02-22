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
          { title: 'simple', value: 'simple' },
          { title: 'image-top', value: 'image-top' },
          { title: 'image-bg', value: 'image-bg' },
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
      hidden: ({ parent }) =>
        parent.layout !== 'image-top' && parent.layout !== 'image-bg',
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
