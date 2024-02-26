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
          { title: 'pop-up', value: 'pop-up' },
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
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      description: 'This is the text that will appear on the button.',
    },
    {
      name: 'thankYouMessage',
      title: 'Thank You Message',
      type: 'text',
      description: 'This is the text that will appear after the form is submitted.',
      validation: Rule => [Rule.required().error('A thank you message is required.')],
    },
  ],
});

export default ContactForm;
