

const location = {
    name: 'location',
    title: 'Location',
    type: 'object',
    fields: [
      {
        name: 'city',
        title: 'City',
        type: 'string',
        validation: Rule => Rule.required().error('Location City is required.'),
      },
      {
        name: 'place',
        title: 'Place',
        type: 'string',
        validation: Rule => Rule.required().error('Location Name is required.'),
      },
      {
        name: 'address',
        title: 'Address',
        type: 'string',
        validation: Rule => Rule.required().error('Location Address is required.'),
      },
    ],
    validation: Rule => Rule.required().error('Location is required.'),
    }

export default location;