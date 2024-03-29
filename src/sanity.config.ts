import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { media } from 'sanity-plugin-media'
import { simplerColorInput } from 'sanity-plugin-simpler-color-input'
import { Structure } from './schemaTypes/structure'

export default defineConfig({
  projectId: "x8b0csby",
  dataset: "production",

  plugins: [structureTool({ structure: Structure }), visionTool(), media(),
    simplerColorInput({
      defaultColorFormat: 'rgba',
      defaultColorList: [
        { label: 'Light', value: '#FFFFFF' },
        { label: 'Dark', value: '#000000' },
        { label: 'Accent', value: '#3E6E70' },
        { label: 'layer', value: '#FFF7F1' },
      ],
      enableSearch: true,
    })],

  schema: {
    types: schemaTypes,
  },
})
