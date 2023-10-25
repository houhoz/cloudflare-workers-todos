import { useEffect } from 'react';

function App() {
  async function getData() {
    const response = await fetch('/getTodos');
    console.log('response', response);
    const movies = await response.json();
    console.log(movies);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-cyan-300 w-screen h-screen flex justify-center">
      <div className="w-[800px] h-96 bg-white shadow hover:shadow-lg mt-24 rounded-xl p-5">
        <span className="text-4xl">Todos</span>
        <div className="mt-2 rounded-md flex">
          <input
            type="text"
            name="todo"
            id="todo"
            className="block flex-1 rounded-md border-0 py-3 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            placeholder="请输入todo"
          />
          <button className="border-0 rounded-md px-8 ring-1 ring-inset ring-gray-300 ml-3">
            新增
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
