# Landing Page Template

*A simple landing page template with built-in email protection.*

![screenshot](screenshot.jpeg)

## Usage

The title, contact email address, and color palette are settable with defaults. All three are strings but the `PALETTE` must be a valid [colorbrewer palette](http://bl.ocks.org/mbostock/5577023) (i.e. 'YlGnBu' or 'RdBu').

To set them, set an environment variable before running the build.

```cli
EMAIL=me@example.com PALETTE=Blues TITLE="My Site" npm run build
```

| Name | Description | Default |
| :---- | :---------  | :------- |
| EMAIL | Email address used as the contact email address | `contact@example.com` |
| TITLE | Title displayed with the contact email | `example.com` |
| PALETTE | Colorbrewer pallete to use as the color scheme | `random` |

## Build

Build the application for deployment.

```cli
npm run build
```

The deployable build artifacts will be written to a `dist` directory in the repo
root.

## Development

Run the local webpack-dev-server with livereload and autocompile on
[http://localhost:8080](http://localhost:8080).

```cli
npm run dev
```
