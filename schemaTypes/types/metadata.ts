import { CharacterCounter } from "../../components/ChatacterCount";

const metaData = {
  name: 'metadata',
  title: 'Metadata',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      components: {
        input: CharacterCounter,
      },
      description: 'What shows up as the link text in search engine (Aim for 40 - 60 characters)',  
      validation: rule => rule.max(60).warning('Shorter titles are usually better - Google recommends ususally between 40-60 characters')
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      components: {
        input: CharacterCounter,
      },
      description: 'Describe the page for search engines. (Aim for 80 - 180 characters)',
      validation: rule => rule.min(80).max(180).warning('Your description should be between 80-180 characters - Google recommends around 160 characters')
    },
    {
      type: 'image',
      title: 'Open Graph Image',
      name: 'image',
      description: 'Image for social media sharing',
      validation: rule => rule.required().error('Open Graph Image is required'),
    },
  ],
};

export default metaData;
