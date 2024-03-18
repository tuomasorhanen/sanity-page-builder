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
        { label: 'Accent', value: '#5C949C' },
        { label: 'layer', value: '#FFF7F1' },
        { label: 'Custom...', value: 'custom' },
      ],
      enableSearch: true,
    })],

  schema: {
    types: schemaTypes,
  },
})
