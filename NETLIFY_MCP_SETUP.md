# Netlify MCP Server Setup Guide

This guide will help you set up a Model Context Protocol (MCP) server for Netlify integration, allowing AI agents to manage your Netlify deployments, sites, and configurations.

## What is MCP?

Model Context Protocol (MCP) is a standardized way for AI agents to interact with external tools and services. This Netlify MCP server enables AI assistants like Claude, Cursor, Windsurf, and others to:

- Deploy your projects to Netlify
- Manage Netlify sites and deployments
- Configure environment variables
- Monitor function logs
- Get site status and information

## Prerequisites

- Node.js 18+ (you have v22 ✅)
- Netlify CLI installed globally
- A Netlify account
- An MCP-compatible client (Claude Desktop, Cursor, Windsurf, etc.)

## Step 1: Install Netlify CLI (if not already installed)

```bash
npm install -g netlify-cli
```

## Step 2: Get Your Netlify Personal Access Token

1. Go to [Netlify User Settings](https://app.netlify.com/user/applications#personal-access-tokens)
2. Click "New access token"
3. Give it a name (e.g., "MCP Integration")
4. Copy the generated token (keep it secure!)

## Step 3: Configure the MCP Server

### Option A: Using the provided configuration file

1. Open `mcp-config.json` in this project
2. Replace `YOUR_NETLIFY_PERSONAL_ACCESS_TOKEN_HERE` with your actual token
3. Save the file

### Option B: Manual configuration for your MCP client

Depending on your MCP client, add this configuration:

#### For Claude Desktop

Add to `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS):

```json
{
  "mcpServers": {
    "netlify": {
      "command": "node",
      "args": ["/path/to/your/project/mcp-server.js"],
      "env": {
        "NETLIFY_AUTH_TOKEN": "your_token_here"
      },
      "disabled": false,
      "autoApprove": [
        "netlify_status",
        "netlify_sites_list",
        "netlify_site_info",
        "netlify_env_list",
        "netlify_functions_list",
        "netlify_logs"
      ]
    }
  }
}
```

#### For Cursor

Add to your Cursor MCP settings:

```json
{
  "netlify": {
    "command": "node",
    "args": ["/path/to/your/project/mcp-server.js"],
    "env": {
      "NETLIFY_AUTH_TOKEN": "your_token_here"
    }
  }
}
```

#### For Windsurf

Add to your Windsurf MCP configuration:

```json
{
  "mcpServers": {
    "netlify": {
      "command": "node",
      "args": ["/path/to/your/project/mcp-server.js"],
      "env": {
        "NETLIFY_AUTH_TOKEN": "your_token_here"
      }
    }
  }
}
```

## Step 4: Test the Setup

1. Restart your MCP client
2. Try asking your AI assistant: "Can you check my Netlify status?"
3. The AI should be able to use the MCP server to get your Netlify information

## Available Tools

Your AI assistant can now use these Netlify tools:

### 🚀 Deployment Tools
- **netlify_deploy**: Deploy your project to Netlify
- **netlify_build**: Build your project using Netlify's build environment

### 📊 Site Management
- **netlify_status**: Get your Netlify account and site status
- **netlify_sites_list**: List all your Netlify sites
- **netlify_site_info**: Get detailed information about a specific site

### 🔧 Environment Variables
- **netlify_env_set**: Set environment variables for your site
- **netlify_env_list**: List environment variables

### ⚡ Functions & Logs
- **netlify_functions_list**: List your Netlify functions
- **netlify_logs**: Get function logs

## Example Usage

Once set up, you can ask your AI assistant things like:

- "Deploy my project to Netlify as a draft"
- "Show me all my Netlify sites"
- "Set the environment variable API_KEY to 'abc123' for production"
- "Get the logs for my contact-form function"
- "Build my project and then deploy it to production"

## Security Best Practices

1. **Never commit your Personal Access Token** to version control
2. **Use environment variables** for sensitive data
3. **Regularly rotate your tokens** for security
4. **Use the autoApprove list carefully** - only include read-only operations

## Troubleshooting

### Common Issues

1. **"Netlify CLI not found"**
   - Install Netlify CLI globally: `npm install -g netlify-cli`
   - Verify installation: `netlify --version`

2. **"Authentication failed"**
   - Check your Personal Access Token is correct
   - Ensure the token has the necessary permissions
   - Try logging in manually: `netlify login`

3. **"Build directory not found"**
   - Run `npm run build` before deploying
   - Check that the `out` directory exists

4. **MCP client not recognizing the server**
   - Restart your MCP client after configuration changes
   - Check the file paths in your configuration
   - Ensure Node.js is in your PATH

### Debug Mode

To see detailed logs from the MCP server, you can run it directly:

```bash
node mcp-server.js
```

Then type JSON-RPC messages to test the server manually.

## Advanced Configuration

### Custom Build Directory

If your build outputs to a different directory than `out`, you can specify it when deploying:

```
"Deploy my project from the 'dist' directory"
```

### Multiple Sites

The MCP server can manage multiple Netlify sites. Use site IDs or names to specify which site to work with:

```
"Get information about site 'my-awesome-site'"
```

### Environment Contexts

You can set environment variables for specific contexts:

- `all`: All deploy contexts
- `production`: Production deploys only
- `deploy-preview`: Deploy previews
- `branch-deploy`: Branch deploys

## Integration with Your Workflow

This MCP server integrates seamlessly with your existing Next.js + Netlify workflow:

1. **Development**: Use `npm run dev` for local development
2. **Building**: Use `npm run build` or the MCP `netlify_build` tool
3. **Deployment**: Use the MCP `netlify_deploy` tool for easy deployments
4. **Monitoring**: Use MCP tools to check status and logs

## Support

If you encounter issues:

1. Check the [Netlify CLI documentation](https://docs.netlify.com/cli/get-started/)
2. Review the [MCP specification](https://modelcontextprotocol.io/)
3. Ensure your MCP client supports the latest MCP version

---

**Happy deploying! 🚀**