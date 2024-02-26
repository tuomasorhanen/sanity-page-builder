import { RiPagesLine } from 'react-icons/ri';
import { defineField } from 'sanity';

const Page = {
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: RiPagesLine,
  groups: [
    { title: 'Configuration', name: 'configuration'},
    { title: 'Page Metadata', name: 'pageMetadata' },
    { title: 'Content', name: 'content', default: true },
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of the page',
      group: 'configuration',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      description: 'Slug creates a navigation path to your page.',
      group: 'configuration',
      type: 'slug',
      validation: Rule => [Rule.required().error('A page without a slug can not be navigated to.')],
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'showInMenu',
      title: 'Show in menu',
      type: 'boolean',
      group: 'configuration',
      description: 'Should this page be shown in the menu?',
      initialValue: true,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'showInFooter',
      title: 'Show in footer',
      type: 'boolean',
      group: 'configuration',
      description: 'Should this page be shown in the footer?',
      initialValue: true,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'menuOrder',
      title: 'Menu order',
      group: 'configuration',
      description: 'Order in which this page is shown on menu. Leave empty if not wanted in menu.',
      type: 'number',
      hidden: ({ parent }) => !parent.showInMenu && !parent.showInFooter,
    }),
    defineField({
      name: 'hasSubPages',
      title: 'Has sub page',
      type: 'boolean',
      group: 'configuration',
      description: 'Does this page have a parent page?',
      hidden: ({ parent }) => !parent.showInMenu,
      initialValue: false,
    }),
    defineField({
      name: 'subPages',
      title: 'Sub page',
      group: 'configuration',
      type: 'array',
      hidden: ({ parent }) => !parent.hasSubPages,
      of: [{ type: 'reference', to: [{ type: 'page' }, { type: 'service' }] }],
      description: 'Sub pages of this page.',
    }),

    defineField({
      name: 'metadata',
      title: 'Metadata',
      type: 'metadata',
      validation: Rule => Rule.required(),
      group: 'pageMetadata',
    }),
    defineField({
      name: 'hero',
      title: 'Hero',
      validation: Rule => Rule.required(),
      group: 'content',
      type: 'hero',
      options: { collapsible: true, collapsed: true },
    }),
    defineField({
      name: 'content',
      title: 'Content',
      group: 'content',
      hidden: ({ document }) => {
        const slug: any = document?.slug;
        return slug?.current === 'blogi' || slug?.current === 'tarjoukset' || slug?.current === 'pienryhmat';
      },
      type: 'array',
      of: [
        { type: 'cta' },
        { type: 'headingAndTitle' },
        { type: 'uiElement' },
        { type: 'grid' },
        { type: 'faqList' },
        { type: 'carousel' },
        { type: 'contactForm' },
        { type: 'priceTable' },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'metadata.image',
    },
    prepare({ title, media }) {
      return {
        title,
        media,
      };
    },
  },
  orderings: [
    {
      title: 'Menu order',
      name: 'menuOrder',
      by: [{ field: 'menuOrder', direction: 'asc' }],
    },
  ],
};

export default Page;
