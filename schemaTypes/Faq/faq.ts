export default {
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: Rule => [Rule.required().error('Question is required.')],
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'string',
      validation: Rule => [Rule.required().error('Answer is required.')],
    },
  ],
};
