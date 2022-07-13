import {createConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

export default createConfig({
  name: 'default',
  title: 'atte-builds',

  projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_API_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_STUDIO_API_DATASET || '',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
