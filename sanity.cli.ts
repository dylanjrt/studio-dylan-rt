import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '53jgcld3',
    dataset: 'production',
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,

  /**
   * Hostname to use when deploying the studio.
   * No need to be prompted during deployment.
   */
  studioHost: 'dylanrt',
})
