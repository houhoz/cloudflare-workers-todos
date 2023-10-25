import { useEffect, useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const [inputText, setInputText] = useState('');

  async function getData() {
    setLoading(true);
    const response = await fetch('/getTodos');
    const res = await response.json();
    setTodos(res);
    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  const handleAddTodo = async () => {
    const params = {
      content: inputText,
      completed: false,
    };
    const response = await fetch('/addTodo', {
      method: 'POST',
      body: JSON.stringify(params),
    });
    const res = await response.json();
    todos.unshift(res);
    setTodos([...todos]);
  };

  const onChangeCheckbox = async (checked, id) => {
    const response = await fetch(`/updateTodo/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ completed: checked }),
    });
    const res = await response.json();
    const index = todos.findIndex((item) => item.id === id);
    todos[index] = res;
    setTodos([...todos]);
  };

  return (
    <div className="bg-cyan-300 w-screen h-screen flex justify-center">
      <div className="w-[800px] h-[500px] bg-white shadow hover:shadow-lg mt-24 rounded-xl p-5">
        <span className="text-4xl">Todos</span>
        <div className="mt-2 rounded-md flex">
          <input
            type="text"
            name="todo"
            className="block flex-1 rounded-md border-0 py-3 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            placeholder="A new todo"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button
            onClick={handleAddTodo}
            className="border-0 rounded-md px-8 text-white bg-indigo-600 ml-3 hover:bg-indigo-900"
          >
            Create
          </button>
        </div>
        {loading ? (
          'loading...'
        ) : (
          <ul className="border-t-2 mt-6 pt-6 h-[300px] overflow-y-scroll">
            {todos.map((item) => (
              <li
                key={item.id}
                className="flex p-3 bg-indigo-100 mt-1 rounded-md hover:bg-indigo-200"
              >
                <input
                  type="checkbox"
                  id={item.id}
                  checked={item.completed}
                  onChange={(e) =>
                    onChangeCheckbox(e.target.checked, item.id)
                  }
                  className="w-10 cursor-pointer"
                />
                <label htmlFor={item.id} className="ml-6 w-full">
                  {item.content}
                </label>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
