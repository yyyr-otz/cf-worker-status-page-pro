import type { Config } from './types'

export const config: Config = {
  settings: {
    title: "yyyr's Status Page Pro",
    url: 'https://cf-worker-status-page-pro-production.yyyrspeed.workers.dev',
    displayDays: 7,
    collectResponseTimes: true,
  },
  monitors: [
    {
      id: 'nezha@koyeb',
      url: 'https://nezha-yyyrspeed.koyeb.app/m',
      description: '哪吒@koyeb',
      followRedirect: false,
    }
  ],
  monitorsCsvUrl: '',
}
