import { useState } from 'react'
const App = () => {
  const [ counter, setCounter ] = useState(0)
  setTimeout(    () => setCounter((prevCount) => {
    console.log(`In first update ${prevCount}`)
    return prevCount + 2}),    2000  );
  console.log(`Rendering 1- ${counter}`);
  setTimeout(    () => setCounter((prevCount) => {
    console.log(`In second update ${prevCount}`)
    return Math.floor(prevCount/2) 
    }),    11000  );
    console.log(`Rendering 2- ${counter}`);
  return (
    <div>{counter}</div>
  )
}

export default App;