import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './src/sanity/schemaTypes'

// We leave these as string defaults. The user will place real values in .env.local
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID! || 'your-project-id'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET! || 'production'

export default defineConfig({
  basePath: '/studio', // <-- IMPORTANT: This embeds Sanity at /studio
  projectId,
  dataset,
  
  title: 'Rainbow Sprouts CMS',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})
