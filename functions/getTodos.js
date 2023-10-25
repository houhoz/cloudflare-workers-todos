export async function onRequestGet({ request, env }) {
  const ip = request.headers.get('CF-Connecting-IP');

  const setCache = (key, data) => env.TODOS.put(key, data);
  const getCache = (key) => env.TODOS.get(key);

  const cacheKey = `data-${ip}`;
  const cache = await getCache(cacheKey);

  let data;

  try {
    if (!cache) {
      await setCache(cacheKey, JSON.stringify([]));
      data = [];
    } else {
      data = JSON.parse(cache);
    }
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
}
