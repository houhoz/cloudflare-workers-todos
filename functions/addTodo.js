export async function onRequestPost({ request, env }) {
  const ip = request.headers.get('CF-Connecting-IP');

  const setCache = (key, data) => env.TODOS.put(key, data);
  const getCache = (key) => env.TODOS.get(key);

  const cacheKey = `data-${ip}`;
  const cache = await getCache(cacheKey);

  let data;

  const body = await request.json();

  try {
    if (!cache) {
      // 就新增一个
      const todos = [];
      data = { ...body, id: 1 };
      todos.push(data);
      await setCache(cacheKey, JSON.stringify(todos));
    } else {
      const todos = JSON.parse(cache);
      const length = todos.length;
      const latestTodo = todos[length - 1];
      const latestTodoId = latestTodo.id;
      data = { ...body, id: latestTodoId + 1 };
      todos.unshift(data);
      await setCache(cacheKey, JSON.stringify(todos));
    }
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
}
