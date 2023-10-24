import { useEffect } from "react";

function App() {

  async function getData() {
    const response = await fetch("/getTodos");
    console.log('response', response)
    const movies = await response.json();
    console.log(movies);
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="bg-cyan-300 w-screen h-screen flex justify-center">
      <div className="w-[800px] h-96 bg-white shadow hover:shadow-lg mt-24 rounded-xl p-5">
        <span className="text-4xl">Todos</span>
      </div>
      
    </div>
  );
}

export default App;
