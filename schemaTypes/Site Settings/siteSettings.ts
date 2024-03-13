import { RiSettings5Line } from 'react-icons/ri';
import { defineType, defineField } from 'sanity';

const siteSettings = defineType({
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  icon: RiSettings5Line,
  fields: [
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      description: 'The name of the company or organization that the website represents.',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
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
      description: 'The logo image for the website, displayed in the header and used for branding purposes.',
      validation: Rule => Rule.required(),
    }),
    
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the website, used for SEO and browser tabs.',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'The description of the website, used for SEO and social media sharing.',
      validation: Rule => Rule.required(),
    }),
    defineField({
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
      description: 'The image for the website, used for SEO and social media sharing.',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'The keywords for the website, used for SEO.',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'domain',
      title: 'Domain',
      type: 'string',
      description: 'The URL of the website, used for SEO in the format wwww.domain.com',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'url',
            title: 'URL',
            type: 'url',
            description: 'The URL of the social media profile.',
            validation: Rule => Rule.required()
          },
          {
            name: 'name',
            title: 'Name',
            type: 'string',
            options: {
              list: [
                { title: 'Facebook', value: 'facebook' },
                { title: 'Instagram', value: 'instagram' },
                { title: 'LinkedIn', value: 'linkedin' },
                { title: 'X', value: 'x' },
                { title: 'YouTube', value: 'youtube' }
              ],
              layout: 'radio'
            }
          }
        ]
      }],
      description: 'The social media links for the website, used for sharing and contact purposes.'
    }),
    defineField({
      name: 'gtmId',
      title: 'Google Tag Manager ID',
      type: 'string',
      description: 'The Google Tag Manager ID for the website, used for tracking and analytics.',
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
