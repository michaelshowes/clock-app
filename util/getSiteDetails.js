export default async function getSiteDetails() {
  const res = await fetch(process.env.WORDPRESS_LOCAL_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query getSiteDetails {
          generalSettings {
            url
            title
          }
        }
      `
    })
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const json = await res.json(),
        details = json.data.generalSettings;

  return details;
}