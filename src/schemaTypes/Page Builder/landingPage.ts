import { RxSwitch } from "react-icons/rx";

const LandingPage = {
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  icon: RxSwitch,
  fields: [
    {
      name: 'buttonName',
      title: 'Button Name',
      description: 'This name shold guide you in the studio. It is only visible in the studio.',
      type: 'string',
    },
    {
      name: 'callToAction',
      title: 'Call to action text',
      description: 'This is the text that will be displayed on the button.',
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
      description: 'Select the page to navigate to. When selecting a service, make sure there is a slug and a page behind the service!',
      to: [{ type: 'page' }, { type: 'service' }, { type: 'post' }, { type: 'offers' }, { type: 'groups' }],
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
      description: 'Buttons will default to style 2 if no style is selected.',
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
      subtitle: 'buttonContent',
      media: 'image',
    },
  },
};

export default LandingPage;