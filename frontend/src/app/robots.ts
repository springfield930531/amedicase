export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://amedicase.com/sitemap.xml',
    host: 'https://amedicase.com',
  };
}
