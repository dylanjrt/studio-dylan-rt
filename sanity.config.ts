import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

import {schemaTypes} from './src/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Dylan RT',

  projectId: '53jgcld3',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
