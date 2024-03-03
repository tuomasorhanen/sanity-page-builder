import { RiPagesLine } from 'react-icons/ri';

const LandingPage = {
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  icon: RiPagesLine,
  fields: [
    {
      name: 'buttonName',
      title: 'Button Name',
      type: 'string',
    },
    {
      name: 'callToAction',
      title: 'Call to action text',
      type: 'string',
      validation: Rule => [Rule.required().error('CTA is required.')],
    },
    {
      name: 'linkType',
      title: 'Link Type',
      type: 'string',
      options: {
        list: [
          { title: 'Internal', value: 'internal' },
          { title: 'External', value: 'external' },
        ],
        layout: 'radio',
      },
      validation: Rule => [Rule.required().error('Link type is required.')],
    },
    {
      name: 'navigateToPage',
      title: 'Navigate to Page',
      type: 'reference',
      to: [{ type: 'page' }, { type: 'service' }],
      validation: Rule => [
        Rule.custom((value, context) => {
          if (context.parent.linkType === 'internal' && !value) {
            return 'Navigation page is required.';
          }
          return true;
        }),
      ],
    },
    {
      name: 'navigateToUrl',
      title: 'Navigate to Url',
      type: 'url',
      validation: Rule => [
        Rule.custom((value, context) => {
          if (context.parent.linkType === 'external' && !value) {
            return 'URL is required.';
          }
          return true;
        }),
      ],
    },

    {
      name: 'buttonContent',
      title: 'Button Content',
      type: 'string',
      options: {
        list: [
          { title: 'Text', value: 'text' },
          { title: 'Image', value: 'image' },
        ],
        layout: 'radio',
      },
      validation: Rule => [Rule.required().error('Button content is required.')],
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
        {
          name: 'aspectRatio',
          title: 'Aspect Ratio',
          type: 'number',
          options: {
            list: [
              { title: '16:9', value: 16 / 9 },
              { title: '4:3', value: 4 / 3 },
              { title: '1:1', value: 1 / 1 },
              { title: '2:3', value: 2 / 3 },
              { title: '3:2', value: 3 / 2 },
              { title: '3:4', value: 3 / 4 },
              { title: '9:16', value: 9 / 16 },
            ],
          },
        },
      ],
      options: {
        hotspot: true,
      },
      hidden: ({ parent }) => parent?.buttonContent !== 'image',
    },
    {
      name: 'style',
      title: 'Style',
      type: 'string',
      options: {
        list: [
          { title: 'style1', value: 'style1' },
          { title: 'style2', value: 'style2' },
        ],
      },
    }

  ],
  preview: {
    select: {
      title: 'buttonName',
    },
  },
};

export default LandingPage;