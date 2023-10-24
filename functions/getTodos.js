export async function onRequest(context) {

  const task = await context.env.EXAMPLE_TODOS.get("data-74.48.44.47");
  return new Response(task);

  // return new Response(task, {
  //   status: 200,
  //   headers: {
  //     'Access-Control-Allow-Origin': '*',
  //     'Access-Control-Allow-Headers': '*',
  //     'Access-Control-Allow-Methods': 'GET',
  //     'Access-Control-Max-Age': '86400',
  //   },
  // });

  // 设置跨域

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