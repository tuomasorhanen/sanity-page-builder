

const person = {
    name: 'person',
    title: 'Person',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Full Name',
            type: 'string',
            validation: Rule => Rule.required().error('A person has to have a name!'),
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            fields: [
                {
                    name: 'alt',
                    title: 'Alternative text',
                    type: 'string',
                },
            ],
            options: {
                hotspot: true,
            },
        },
        {
            name: 'bio',
            title: 'Bio',
            type: 'text',
        },
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
        },
    },
};

export default person;