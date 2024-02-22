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
  ],
};
