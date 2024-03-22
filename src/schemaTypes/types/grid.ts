import { RiLayoutGridLine } from 'react-icons/ri';
import { defineField } from 'sanity';

const grid = defineField({
  name: 'grid',
  type: 'object',
  title: 'Grid',
  hidden: true,
  description: 'This is a simple grid component, all items are going to be equally wide',
  icon: RiLayoutGridLine,
  groups: [
    {
      name: 'columns',
      title: 'Columns',
    },
    {
      name: 'items',
      title: 'Items',
    },
  ],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => [Rule.required().error('Title is required.')],
    },
    {
      name: 'columns',
      title: 'Columns',
      description:
        'There are some issues currently with the grid component. Please check if you got the expected amoint of columns.',
      type: 'columns',
      group: 'columns',
    },
    {
      name: 'style',
      title: 'Style',
      type: 'string',
      options: {
        list: [
          { title: 'Default', value: 'default' },
          { title: 'carousel', value: 'carousel' },
        ],
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
    },
    {
      name: 'marginTop',
      title: 'Margin Top',
      type: 'string',
      initialValue: 'default',
      options: {
        list: [
          { title: 'Small', value: 'small' },
          { title: 'default', value: 'default' },
        ],
      },
    },
    {
      name: 'items',
      title: 'Items',
      group: 'items',
      type: 'array',
      validation: Rule => [Rule.required().error('content is required.')],
      options: {
        layout: 'grid',
      },
      of: [
        { type: 'card' },
        {
          name: 'post',
          type: 'reference',
          to: [{ type: 'post' }],
        },
        {
          name: 'groups',
          type: 'reference',
          to: [{ type: 'groups' }],
        },
        {
          name: 'offers',
          type: 'reference',
          to: [{ type: 'offers' }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'style',
    },
    prepare({ title }: { title: string }) {
      return {
        title: 'Grid',
        subtitle: `${title}` ,

      };
    },
  },
});

export default grid;
