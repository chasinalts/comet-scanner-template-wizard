# Appwrite MCP Server Setup Guide

This guide explains how to set up and use the Appwrite Model Context Protocol (MCP) server with your COMET Scanner application.

## What is the Appwrite MCP Server?

The Appwrite MCP server allows AI assistants (like Claude, Cursor, or Windsurf Editor) to directly interact with your Appwrite project. This enables AI tools to:

- Query and modify your Appwrite database
- Manage users and authentication
- Upload and download files from storage
- Execute functions
- And more

## Prerequisites

Before setting up the MCP server, you need:

1. An Appwrite project with the COMET Scanner application set up
2. An Appwrite API key with appropriate permissions
3. Node.js 18 or higher

## Installation

You can set up the Appwrite MCP server using the provided script:

```bash
npm run appwrite:setup-mcp
```

This script will:

1. Install the `uv` package manager if not already installed
2. Install the Appwrite MCP server
3. Create configuration files for different AI tools (Claude Desktop, Cursor, Windsurf Editor)
4. Guide you through setting up your Appwrite API key

## Manual Installation

If you prefer to install manually:

1. Install `uv`:
   ```bash
   # For Linux/macOS
   curl -LsSf https://astral.sh/uv/install.sh | sh
   
   # For Windows (PowerShell)
   powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
   ```

2. Install the MCP server:
   ```bash
   pip install mcp-server-appwrite
   ```

3. Run the MCP server:
   ```bash
   # For Linux/macOS
   env APPWRITE_API_KEY=your-api-key env APPWRITE_PROJECT_ID=your-project-id uvx mcp-server-appwrite --databases --users --storage
   
   # For Windows
   cmd /c SET APPWRITE_PROJECT_ID=your-project-id && SET APPWRITE_API_KEY=your-api-key && uvx mcp-server-appwrite --databases --users --storage
   ```

## Integrating with AI Tools

### Cursor

1. Open Cursor Settings > MCP
2. Click "Add new MCP server"
3. Enter the following:
   - Name: Appwrite
   - Type: Command
   - Command: (Copy from cursor-mcp-config.json)

### Claude Desktop

1. Open Claude Desktop Settings > Developer
2. Click "Edit Config"
3. Add the configuration from claude-desktop-config.json

### Windsurf Editor

1. Open Windsurf Settings > Cascade > Model Context Protocol (MCP) Servers
2. Click "View raw config"
3. Add the configuration from windsurf-mcp-config.json

## Available MCP Tools

The MCP server provides various tools for interacting with Appwrite. By default, the setup script enables:

- `--databases`: Database operations (create, read, update, delete documents)
- `--users`: User management operations
- `--storage`: File storage operations

Additional tools can be enabled by adding flags to the command:

- `--teams`: Team management
- `--functions`: Function execution
- `--messaging`: Messaging operations
- `--locale`: Locale operations
- `--avatars`: Avatar generation
- `--all`: Enable all Appwrite APIs

## Troubleshooting

### MCP Server Not Starting

If the MCP server fails to start:

1. Check that your API key has the necessary permissions
2. Verify your Appwrite project ID is correct
3. Ensure `uv` is properly installed and in your PATH

### AI Tool Not Connecting

If your AI tool can't connect to the MCP server:

1. Make sure the MCP server is running
2. Check that the configuration is correctly set up in the AI tool
3. Verify that the API key and project ID are correct

## Security Considerations

The MCP server uses your Appwrite API key to authenticate with Appwrite. This key grants access to your Appwrite project based on the permissions you've assigned to it.

For security:

1. Create a dedicated API key with only the necessary permissions
2. Never share your API key or configuration files
3. Consider using environment variables instead of hardcoding the API key
4. Regularly rotate your API keys

## Additional Resources

- [Appwrite MCP Documentation](https://appwrite.io/docs/tooling/mcp)
- [Appwrite GitHub Repository](https://github.com/appwrite/mcp)
- [Model Context Protocol Specification](https://modelcontextprotocol.io)
