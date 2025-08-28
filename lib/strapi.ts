export async function fetchStrapiData(path: string) {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

  const res = await fetch(`${baseUrl}/api/${path}`, {
    // headers: {
    //   "Content-Type": "application/json",
    //   Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    // },
    next: { revalidate: 60 }, // ISR for 1 minute cache
  });

  if (!res.ok) {
    console.error(`Strapi fetch error: ${res.statusText}`);
    return null;
  }

  return res.json();
}
