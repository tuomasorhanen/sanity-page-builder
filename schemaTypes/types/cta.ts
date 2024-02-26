import { GiNinjaHeroicStance } from 'react-icons/gi';

const Cta = {
  name: 'cta',
  title: 'Call to Action',
  type: 'object',
  icon: GiNinjaHeroicStance,
  groups: [
    { title: 'Content', name: 'content', default: true },
    { title: 'Theme', name: 'theme' },
  ],
  fields: [
    {
      name: 'content',
      title: 'Content',
      group: 'content',
      type: 'content',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      group: 'content',
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
          initialValue: 16/9,
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
      group: 'content',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'landingPage' }] }],
    },
    {
      name: 'layout',
      title: 'Layout',
      type: 'string',
      group: 'content',
      initialValue: 'image-bg-center-slim',
      options: {
        list: [
          { title: 'image-bg-center-slim', value: 'image-bg-center-slim' },
          { title: 'simple-image-right', value: 'simple-image-right' },
          { title: 'simple-image-left', value: 'simple-image-left' },
          { title: 'image-bg-center-wide', value: 'image-bg-center-wide' },
        ],
        validation: Rule => [Rule.required().error('A layout is required.')],
      },
    },
    {
      name: 'opacity',
      title: 'Background Opacity',
      group: 'theme',
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
    {
      name: 'CtaBgColor',
      title: 'Background Color',
      group: 'theme',
      type: 'simplerColor',
    },
  ],
};
export default Cta;
