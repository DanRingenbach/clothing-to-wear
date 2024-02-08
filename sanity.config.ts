import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'clothing-to-wear-nextjs-site',
  title: 'clothing to wear',

  projectId: 'mni5vnd7',
  dataset: 'production',

  basePath: "/studio",

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})
