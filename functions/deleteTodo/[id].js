export async function onRequestDelete({ request, env, params }) {
  const ip = request.headers.get('CF-Connecting-IP');

  const setCache = (key, data) => env.TODOS.put(key, data);
  const getCache = (key) => env.TODOS.get(key);

  const cacheKey = `data-${ip}`;
  const cache = await getCache(cacheKey);

  const updateId = params.id;

  try {
    if (!cache) {
      // 没有的话
      return new Response(JSON.stringify({ message: 'Not Found' }), {
        status: 404,
      });
    }

    const todos = JSON.parse(cache);

    const curTodoIndex = todos.findIndex(
      (item) => item.id === Number(updateId)
    );

    if (curTodoIndex === -1) {
      return new Response(JSON.stringify({ message: 'Not Found' }), {
        status: 404,
      });
    }

    todos.splice(curTodoIndex, 1);

    await setCache(cacheKey, JSON.stringify(todos));

    return new Response(JSON.stringify({ message: '删除成功' }), {
      status: 200,
    });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
}
