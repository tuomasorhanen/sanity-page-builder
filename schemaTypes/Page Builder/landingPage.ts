import { RiPagesLine } from 'react-icons/ri';

const LandingPage = {
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  icon: RiPagesLine,
  fields: [
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
      to: { type: 'page' },
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
      ],
      options: {
        hotspot: true,
      },
      hidden: ({ parent }) => parent?.buttonContent !== 'image',
    },
    {
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      options: {
        list: [
          { title: 'Background', value: 'background' },
          { title: 'Text', value: 'text' },
          { title: 'Accent', value: 'accent' },
          { title: 'Layer', value: 'layer' },
          { title: 'Secondary', value: 'secondary' },
          { title: 'White', value: 'white' },
          { title: 'Black', value: 'black' },
        ],
        layout: 'radio',
      },
      hidden: ({ parent }) => parent?.buttonContent !== 'text',
    },
    {
      name: 'textColor',
      title: 'Text Color',
      type: 'string',
      options: {
        list: [
          { title: 'Background', value: 'background' },
          { title: 'Text', value: 'text' },
          { title: 'Accent', value: 'accent' },
          { title: 'Layer', value: 'layer' },
          { title: 'Secondary', value: 'secondary' },
          { title: 'White', value: 'white' },
          { title: 'Black', value: 'black' },
        ],
        layout: 'radio',
      },
      hidden: ({ parent }) => parent?.buttonContent !== 'text',
    },
    {
      name: 'border',
      title: 'Border',
      type: 'boolean',
    },
    {
      name: 'borderColor',
      title: 'Border Color',
      type: 'string',
      options: {
        list: [
          { title: 'Background', value: 'background' },
          { title: 'Text', value: 'text' },
          { title: 'Accent', value: 'accent' },
          { title: 'Layer', value: 'layer' },
          { title: 'Secondary', value: 'secondary' },
          { title: 'White', value: 'white' },
          { title: 'Black', value: 'black' },
        ],
        layout: 'radio',
      },
      hidden: ({ parent }) => !parent.border,
    },
  ],
  preview: {
    select: {
      title: 'callToAction',
    },
  },
};

export default LandingPage;