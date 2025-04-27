/**
 * Deployment configuration for COMET Scanner Wizard
 *
 * This file contains configuration for different deployment environments.
 * Use it with deployment scripts or CI/CD pipelines.
 */


export default {
  // Production environment
  production: {
    // Base URL for the application
    baseUrl: '/',

    // API endpoints
    api: {
      baseUrl: 'https://api.example.com',
      timeout: 30000,
    },

    // Feature flags
    features: {
      analytics: true,
      serviceWorker: false,
      debugMode: false,
    },

    // Deployment settings
    deployment: {
      // Cloudflare Pages settings
      cloudflare: {
        projectName: 'comet-scanner-wizard',
        branch: 'main',
      },

      // Netlify settings
      netlify: {
        siteName: 'comet-scanner-template-wizard',
        team: 'A_Traders_Edge',
      },

      // Vercel settings
      vercel: {
        projectName: 'comet-scanner-wizard',
        team: 'your-team-name',
      },

      // GitHub Pages settings
      githubPages: {
        repository: 'username/comet-scanner-wizard',
        branch: 'gh-pages',
      },

      // AWS S3 settings
      awsS3: {
        bucket: 'comet-scanner-wizard',
        region: 'us-east-1',
        cloudfrontDistribution: 'DISTRIBUTION_ID',
      },
    },
  },

  // Staging environment
  staging: {
    baseUrl: '/',
    api: {
      baseUrl: 'https://staging-api.example.com',
      timeout: 30000,
    },
    features: {
      analytics: true,
      serviceWorker: false,
      debugMode: true,
    },
    deployment: {
      // Same structure as production, but with staging-specific values
    },
  },

  // Development environment
  development: {
    baseUrl: '/',
    api: {
      baseUrl: 'http://localhost:3005',
      timeout: 30000,
    },
    features: {
      analytics: false,
      serviceWorker: false,
      debugMode: true,
    },
  },
};
