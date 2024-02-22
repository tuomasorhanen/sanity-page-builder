import { RiSettings5Line } from 'react-icons/ri';
import { defineType, defineField } from 'sanity';

const siteSettings = defineType({
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  icon: RiSettings5Line,
  groups: [
    { title: 'Site info', name: 'siteInfo', default: true },
    { title: 'Theme', name: 'theme' },
  ],
  fields: [
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      group: 'siteInfo',
      description: 'The name of the company or organization that the website represents.',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      group: 'siteInfo',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
        },
      ],
      description: 'The logo image for the website, displayed in the header and used for branding purposes.',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'bgColor',
      title: 'Background Color',
      group: 'theme',
      type: 'simplerColor',
     
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'textColor',
      title: 'Text Color',
      group: 'theme',
      type: 'simplerColor',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'layerColor',
      title: 'Layer Color',
      group: 'theme',
      type: 'simplerColor',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'accentColor',
      title: 'Accent Color',
      group: 'theme',
      type: 'simplerColor',
     
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: 'Global Settings',
      };
    },
  },
});

export default siteSettings;
