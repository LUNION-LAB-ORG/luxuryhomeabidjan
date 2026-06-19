/**
 * Configuration PM2 — luxuryhomeabidjan (site public Next.js).
 *
 * Build      : `pnpm build`  (next build)
 * Démarrage  : `pm2 start ecosystem.config.js`
 * Recharge   : `pm2 reload ecosystem.config.js --update-env`
 *
 * Les variables NEXT_PUBLIC_* (ex: NEXT_PUBLIC_EMAILJS_*) sont lues au build
 * depuis le `.env` du serveur.
 */
module.exports = {
  apps: [
    {
      name: 'luxuryhomeabidjan',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      cwd: __dirname,
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PORT: 4005,
      },
    },
  ],
};
