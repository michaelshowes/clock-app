export default async function getHomepage() {
  const res = await fetch(process.env.WORDPRESS_LOCAL_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query getHomepage {
          page(id: "/", idType: URI) {
            slug
            title
            content
          }
        }
      `
    })
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const json = await res.json(),
    pages = json.data.page;

  return pages;
}
