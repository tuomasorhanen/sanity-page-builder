import { RiSettings5Line } from 'react-icons/ri';
import { defineType, defineField } from 'sanity';
import {CharacterCounter} from '../../components/ChatacterCount';

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
      components: {
        input: CharacterCounter,
      },
      description: 'The title of the website, used for SEO and browser tabs. (Aim for 40 - 60 characters)',
      validation: rule => rule.max(60).warning('Shorter titles are usually better - Google recommends ususally between 40-60 characters')
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      components: {
        input: CharacterCounter,
      },
      description: 'The description of the website, used for SEO and social media sharing. (Aim for 80 - 160 characters)',
      validation: rule => rule.min(80).max(180).warning('Your description should be between 80-180 characters - Google recommends around 160 characters')
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
      validation: Rule => Rule.required().min(5).max(10).warning('You should have between 5-10 keywords'),
    }),
    defineField({
      name: 'domain',
      title: 'Domain',
      type: 'string',
      description: 'The URL of the website, used for SEO in the format wwww.domain.com',
      validation: Rule => Rule.required().regex(/^www\..+\.(com|org|net|io|fi)$/).error('Invalid domain format. Domain should be in the format www.domain.com')
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
