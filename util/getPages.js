export default async function getPages( params ) {
  const res = await fetch(process.env.WORDPRESS_LOCAL_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query getPages($id: ID!) {
          page(id: $id, idType: URI) {
            slug
            title
            content
          }
        }
      `,
      variables: {
        id: `${params.slug.toString()}`
      }
    })
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const json = await res.json(),
        pages = json.data.page;

  return pages;
}