import { defineField } from 'sanity';

const ContactForm = defineField({
  name: 'contactForm',
  title: 'ContactForm',
  type: 'object',
  fields: [
    {
      name: 'layout',
      title: 'Contact Form Layout',
      type: 'string',
      options: {
        list: [
          { title: 'simple-right', value: 'simple-right' },
        ],
        validation: Rule => [Rule.required().error('A layout is required.')],
      },
    },
  {
    name: 'form',
    title: 'Form',
    type: 'reference',
    to: [{ type: 'form' }],
  }
  ],
  preview: {
    select: {
      title: 'layout',
      subtitle: 'form.title',
    },
  },
});

export default ContactForm;
