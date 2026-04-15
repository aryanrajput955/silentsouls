
export default function sitemap() {
  const baseUrl = 'https://www.silentsouls.org';
  
  // Define your static routes here
  const routes = ['', '/about', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  return [...routes];
}
