const content = {
  name: 'content',
  title: 'Content',
  type: 'array',
  of: [
    {
      type: 'block',
      marks: {
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'link',
            fields: [
              {
                name: 'url',
                type: 'url',
              },
            ],
          },
          {
            name: 'internalLink',
            type: 'object',
            title: 'Internal link',
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [{ type: 'post' }, { type: 'page' }, { type: 'offers' }, { type: 'groups' }, { type: 'service' }],
              },
            ],
          },
        ],
      },
    },
    {
      name: 'image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
    },
    {
      name: 'youtube',
      type: 'object',
      title: 'YouTube Video',
      fields: [
        {
          name: 'url',
          type: 'url',
          title: 'URL',
        },
      ],
    },
  ],
};

export default content;
