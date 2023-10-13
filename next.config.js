/** @type {import('next').NextConfig} */
const en = require ('./src/lang/en.json')
const de = require ('./src/lang/de.json')

const nextConfig = {
    i18n: {
        locales: ['fr', 'en', 'de'],
        defaultLocale: 'fr'
      },
      async rewrites() { // rewrites localized url to fr components
        return [
            ...Object.entries(en).map(([key, value]) => (key[0]==='/'?{
              source: `${value}`,
              destination: `${key}`,
            }:null)),
            ...Object.entries(de).map(([key, value]) => (key[0]==='/'?{
              source: `${value}`,
              destination: `${key}`,
            }:null)),
          ].filter(i=>i!==null)
      }
}

module.exports = nextConfig
