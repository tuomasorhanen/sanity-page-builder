import { FaLocationDot } from "react-icons/fa6";

const location = {
    name: 'location',
    title: 'Location',
    icon: FaLocationDot,
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: Rule => Rule.required().error('Location Title is required.'),
      },
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