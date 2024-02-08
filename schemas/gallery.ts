// schemas/gallery.ts

import { defineField } from "sanity";


const gallery = ({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
   defineField( {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Title of the gallery',
    }),
    defineField( {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Description of the gallery',
    }),
    defineField( {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [{ type: 'image' }],
      options: {
        layout: 'grid',
      },
      description: 'Add images to the gallery',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images.0', // Display the first image as thumbnail in Sanity Studio
    },
  },
});

export default gallery