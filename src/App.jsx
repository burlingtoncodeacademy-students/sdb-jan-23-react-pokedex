import { useState, useEffect } from 'react';
import './App.css';
import { Pokemon } from './components/Pokemon';
import Input from './components/Input';

function App() {

  const [ count, setCount ] = useState(0)
  const [ sporadicTrigger, setSporadicTrigger ] = useState(true)

  const [ search, setSearch ] = useState("")

  // ? This will trigger the useEffect every time sporadicTrigger state variable changes
  // setInterval(() => {
  //   sporadicTrigger ? setSporadicTrigger(false) : setSporadicTrigger(true)
  // }, 2000);

  // useEffect(() => {
  //   console.log("triggered during rerender")
  // }, [sporadicTrigger])

  // document.title = `You clicked ${count} times`

  function incCount() {
    setCount(count + 1)
    console.log("rerender happened")
  }

  return (
    <>
    {/* <button onClick={incCount} style={{fontSize: "100pt"}}>{count}</button> */}
    <Input setSearch={setSearch} />
    <Pokemon search={search} />
    </>
  );
}

export default App;
