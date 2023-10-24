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
    <div className="App">
      111
    </div>
  );
}

export default App;
