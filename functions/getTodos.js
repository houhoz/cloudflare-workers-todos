export async function onRequest(context) {




  const defaultData = { todos: [] };

  const task = await context.env.EXAMPLE_TODOS.get("data-74.48.44.47");

  console.log('task', task)

  return new Response(task);

  // const setCache = (key, data) => env.EXAMPLE_TODOS.put(key, data);
  // const getCache = key => env.EXAMPLE_TODOS.get(key);




  // const ip = request.headers.get('CF-Connecting-IP');
  // const cacheKey = `data-${ip}`;
  // let data;
  // const cache = await getCache(cacheKey);
  // if (!cache) {
  //   await setCache(cacheKey, JSON.stringify(defaultData));
  //   data = defaultData;
  // } else {
  //   data = JSON.parse(cache);
  // }
}