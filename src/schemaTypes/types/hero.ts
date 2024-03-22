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
  fields: [
    {
      name: 'layout',
      title: 'Layout',
      type: 'string',
      group: 'content',
      initialValue: 'none',
      options: {
        list: [
          { title: 'Background Image', value: 'image-bg-center' },
          { title: 'Simple rigth', value: 'simple-image-right' },
          { title: 'Simple left', value: 'simple-image-left' },
          { title: 'Banner', value: 'banner' },
          { title: 'Heading', value: 'heading' },
          { title: 'none', value: 'none'},
        ],
      },
    },
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
      name: 'animation',
      title: 'Animation',
      group: 'theme',
      type: 'string',
      initialValue: 'none',
      options: {
        list: [
          { title: 'none', value: 'none' },
          { title: 'fade-in', value: 'fade-in' },
        ],
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
      name: 'heroBgColor',
      title: 'Background Color',
      group: 'theme',
      type: 'simplerColor',
    },
  ],
};
export default Hero;
