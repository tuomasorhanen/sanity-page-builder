import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { media } from 'sanity-plugin-media'
import { simplerColorInput } from 'sanity-plugin-simpler-color-input'
import { Structure } from './schemaTypes/structure'


export default defineConfig({
  name: 'default',
  title: 'Fysiosarianne draft',

  projectId: 'x8b0csby',
  dataset: 'production',

  plugins: [structureTool({ structure: Structure }), visionTool(), media(),
    simplerColorInput({
      // Note: These are all optional
      defaultColorFormat: 'rgba',
      defaultColorList: [
        { label: 'Light', value: '#ffffff' },
        { label: 'Dark', value: '#333333' },
        { label: 'Brand', value: '#ca786d' },
        { label: 'Accent', value: '#626754' },
        { label: 'Custom...', value: 'custom' },
      ],
      enableSearch: true,
    })],

  schema: {
    types: schemaTypes,
  },
})
