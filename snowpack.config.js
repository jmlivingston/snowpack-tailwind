/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
    src: { url: '/src' },
    // Mount "public" to the root URL path ("/*") and serve files with zero transformations
    public: { url: '/', static: true, resolve: true },
  },
  plugins: [
    '@snowpack/plugin-postcss',
    /* ... */
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    { match: 'routes', src: '.*', dest: './index.html' },
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // bundle: true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
}
