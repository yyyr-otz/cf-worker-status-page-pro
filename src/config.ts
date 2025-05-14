import type { Config } from './types'

export const config: Config = {
  settings: {
    title: 'Status Page Pro',
    url: 'https://cf-worker-status-page-pro-production.yyyrspeed.workers.dev',
    displayDays: 7,
    collectResponseTimes: true,
  },
  monitors: [
    {
      id: 'nezha-claw',
      url: 'https://nezha-claw.yyyrspeed.nyc.mn',
      description: '哪吒@claw',
      followRedirect: false,
    }
  ],
  monitorsCsvUrl: '',
}
