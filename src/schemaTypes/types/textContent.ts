import { TbHeading } from 'react-icons/tb';
import { defineField } from 'sanity';

const textContent = defineField({
  name: 'headingAndTitle',
  title: 'Heading And Title',
  type: 'object',
  icon: TbHeading,
  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'content',
    },
    {
      name: 'style',
      title: 'Style',
      type: 'string',
      options: {
        list: [
          { title: 'centered', value: 'centered' },
          { title: 'left', value: 'left' },
        ],
        validation: Rule => [Rule.required().error('A style is required.')],
      },
    },
    {
      name: 'animation',
      title: 'Animation',
      type: 'string',
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
      content: 'content',
      style: 'style',
    },
    prepare(selection) {
      const {style} = selection;
      return {
        title: 'Heading and Title',
        subtitle: style,
      };
    },
  },
});

export default textContent;
