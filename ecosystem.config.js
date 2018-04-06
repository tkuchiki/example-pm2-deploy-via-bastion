module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'API',
      script    : 'app.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    },

    // Second application
    {
      name      : 'WEB',
      script    : 'web.js'
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    development : {
      user : 'alice',
      host : 'ssh1',
      ref  : 'origin/master',
      repo : 'https://github.com/tkuchiki/example-pm2-deploy-via-bastion',
      ssh_options: 'UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -F ssh_config',
      path : '/tmp',
      'post-deploy' : 'npm install',
      env  : {
        NODE_ENV: 'development'
      }
    }
  }
};
