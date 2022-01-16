module.exports = {
  apps: [
    {
      name: 'spry-live2d-api',
      script: './src/main.js',
      cwd: './',
      watch: true,
      ignore_watch: ['logs'],
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
}
