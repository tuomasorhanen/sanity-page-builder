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
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'This is the text that will appear above the form.',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'This is the text that will appear above the form.',
    },
    {
      name: 'thankYouMessage',
      title: 'Thank You Message',
      type: 'text',
      description: 'This is the text that will appear after the form is submitted.',
      validation: Rule => [Rule.required().error('A thank you message is required.')],
    },
  ],
  preview: {
    select: {
      title: 'title',
      layout: 'layout',
    },
    prepare(selection) {
      const {title, layout} = selection;
      return {
        title: 'Contact Form',
        subtitle: layout,
      };
    },
  },
});

export default ContactForm;
