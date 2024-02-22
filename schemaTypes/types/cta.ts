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
      name: 'customColors',
      title: 'Custom Colors',
      group: 'theme',
      type: 'boolean',
    },
    {
      name: 'CtaTextColor',
      title: 'Text Color',
      group: 'theme',
      type: 'simplerColor',
      hidden: ({ parent }) => !parent.customColors,
    },
    {
      name: 'CtaBgColor',
      title: 'Background Color',
      group: 'theme',
      type: 'simplerColor',
      hidden: ({ parent }) => !parent.customColors,
    },
  ],
};
export default Cta;
