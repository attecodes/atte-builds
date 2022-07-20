import {createCliConfig} from '@sanity/cli'

export default createCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_API_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_STUDIO_API_DATASET,
  },
})
