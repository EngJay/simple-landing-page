# Landing Page Template

*A simple landing page template with built-in email protection.*

![screenshot](screenshot.jpeg)

## Usage

The domain is automatically populated from the environment.

The email address is set by adding a secret in your repository settings or
setting an environment variable on the CLI.

- **Name:** `CONTACT_EMAIL`
- **Value:** `<EMAIL_ADDRESS>`

## Development

Run the local webpack-dev-server with livereload and autocompile on
[http://localhost:8080](http://localhost:8080).

```cli
npm run dev
```

## Deployment

Build the application for deployment.

```cli
npm run build
```

The deployable build artifacts will be written to a `dist` directory in the repo
root.
