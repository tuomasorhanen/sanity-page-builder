const metaData = {
  name: 'metadata',
  title: 'Metadata',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'What shows up as the link text in search engine',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'Describe the page for search engines.',
    },
    {
      type: 'image',
      title: 'Open Graph Image',
      name: 'image',
      description:
        'URL of the image that should be used in social media previews. If you define this, you must define two other OG basic properties as well: title and type.',
    },
  ],
};

export default metaData;
