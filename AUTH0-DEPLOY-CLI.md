# Auth0 Deploy CLI Setup

This document explains how to use the Auth0 Deploy CLI with your COMET Scanner Template Wizard project.

## Prerequisites

- Node.js v18+
- Auth0 account with appropriate permissions
- Auth0 Deploy CLI installed globally: `npm install -g auth0-deploy-cli`

## Configuration

The Auth0 Deploy CLI is configured using:

1. `config.json` file in the root directory
2. Environment variables in your `.env` file

## Available Commands

### Export Auth0 Configuration

To export your current Auth0 tenant configuration:

```bash
npm run auth0:export
```

This will export your Auth0 configuration to the `tenant` directory in YAML format.

### Import Auth0 Configuration

To import Auth0 configuration from your local files:

```bash
npm run auth0:import
```

This will import the configuration from `tenant/tenant.yaml` to your Auth0 tenant.

## Security Considerations

- Never commit your `.env` file or `config.json` file to version control
- Use environment variables for sensitive information when possible
- The `AUTH0_ALLOW_DELETE` setting is set to `false` by default for safety

## Excluded Resources

The following resource types are excluded from management:

- organizations
- migrations

## Additional Configuration

You can modify the `config.json` file to:

- Include or exclude specific resource types
- Set keyword replacement mappings
- Configure other Auth0 Deploy CLI options

For more information, see the [Auth0 Deploy CLI documentation](https://auth0.com/docs/deploy-monitor/deploy-cli-tool/configure-the-deploy-cli).
