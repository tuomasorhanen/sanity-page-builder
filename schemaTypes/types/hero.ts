import { GiNinjaHeroicStance } from 'react-icons/gi';

const Hero = {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  icon: GiNinjaHeroicStance,
  groups: [
    { title: 'Content', name: 'content', default: true },
    { title: 'Theme', name: 'theme' },
  ],
  fieldsets: [
    {
      name: 'content',
      title: 'Content',
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    {
      name: 'content',
      title: 'Content',
      group: 'content',
      fieldSet: 'content',
      type: 'content',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      fieldSet: 'content',
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
      fieldSet: 'content',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'landingPage' }] }],
    },
    {
      name: 'layout',
      title: 'Layout',
      type: 'string',
      group: 'content',
      fieldSet: 'content',
      initialValue: 'image-bg-center',
      options: {
        list: [
          { title: 'Background image with centered text', value: 'image-bg-center' },
          { title: 'Simple hero with image on the right side', value: 'simple-image-right' },
          { title: 'Simple hero with image on the left side', value: 'simple-image-left' },
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
      name: 'heroTextColor',
      title: 'Text Color',
      group: 'theme',
      type: 'simplerColor',
    },
    {
      name: 'heroBgColor',
      title: 'Background Color',
      group: 'theme',
      type: 'simplerColor',
    },
  ],
};
export default Hero;
