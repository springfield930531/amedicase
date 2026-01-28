export default async function sitemap() {
  const baseUrl = 'https://amedicase.com';
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
