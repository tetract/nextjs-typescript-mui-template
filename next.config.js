// eslint-disable-next-line @typescript-eslint/no-var-requires
const routes = require('nextjs-routing-module').default;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextTranslate = require('next-translate');

const redirectsBuilder = array => {
  return [
    ...array.map(x => {
      return {
        // source and destination mixup is not a mistake!!
        source: '/' + x.locale + x.destination,
        destination: x.source,
        permanent: false,
        locale: false
      };
    })
  ];
};
const rewritesBuilder = array => {
  return [
    {
      source: '/sitemap.xml',
      destination: '/api/sitemap'
    },
    ...array.map(x => {
      return {
        source: x.source,
        destination: x.destination
      };
    })
  ];
};
module.exports = nextTranslate({
  i18n: {
    // adjust this per-project basis
    defaultLocale: 'lt',
    locales: ['lt', 'en'],
    localeDetection: false
  },
  images: {
    domains: []
  },
  async redirects() {
    return redirectsBuilder(routes);
  },
  async rewrites() {
    return rewritesBuilder(routes);
  }
});
