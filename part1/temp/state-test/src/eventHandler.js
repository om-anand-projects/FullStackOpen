import { useState } from 'react'

const App = () => {
    
    const [ counter, setCounter ] = useState(0)

    const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

    const Display = ({ counter }) => <div>{counter}</div>

    const increaseByOne = () => setCounter(counter + 1)
    const decreaseByOne = () => setCounter(counter - 1)
    const setToZero = () => setCounter(0)
    return (
      <div>
        <Display counter={counter}/>
        <Button onClick={increaseByOne} text='plus'/>
        <Button onClick={decreaseByOne} text='minus'/>
        <Button onClick={setToZero} text='zero'/>
      </div>
    )
  }
export default App;
