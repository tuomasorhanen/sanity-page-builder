import { defineField } from 'sanity';

export default {
  name: 'faqList',
  title: 'FAQ List',
  type: 'object',
  fields: [
    defineField({
      name: 'faqList',
      title: 'FAQ',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'faq' }],
        },
      ],
    }),
    {
      name: 'animation',
      title: 'Animation',
      type: 'string',
      initialValue: 'none',
      options: {
        list: [
          { title: 'none', value: 'none' },
          { title: 'fade-in', value: 'fade-in' },
        ],
      },
    }
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: 'FAQ List',
        subtitle: title,
      };
    },
  },
};
