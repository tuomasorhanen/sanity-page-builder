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
    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'object',
      fields: [
        {
          name: 'showEmailInFooter',
          title: 'Show Email in Footer',
          type: 'boolean',
          description: 'Show the email address in the footer.',
          initialValue: false,
        },
        {
          name: 'email',
          title: 'Email',
          type: 'email',
          description: 'The email address for the website, used for contact purposes.',
          validation: Rule => Rule.required()
        },
        {
          name: 'showPhoneInFooter',
          title: 'Show Phone in Footer',
          type: 'boolean',
          description: 'Show the phone number in the footer.',
          initialValue: false,
        },
        {
          name: 'phone',
          title: 'Phone',
          type: 'string',
          description: 'The phone number for the website, used for contact purposes.',
          validation: Rule => Rule.required()
        },
        {
          name: 'showLocationsInFooter',
          title: 'Show Locations in Footer',
          type: 'boolean',
          description: 'Show the Locations in the footer.',
          initialValue: false,
        },
        {
          name: 'locations',
          title: 'Locations',
          type: 'array',
          of: [{ type: 'reference', to: [{ type: 'location' }], }],
          description: 'The locations for the business, used for contact purposes.',
          validation: Rule => Rule.required()
        }
      ],
      description: 'The contact details for the website, used for contact purposes.'
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
