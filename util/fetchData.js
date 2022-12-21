// Fetch data from endpoint

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export const users = await getData();