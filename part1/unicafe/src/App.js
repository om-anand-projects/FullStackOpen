import { useState } from 'react'
const incrementState = (state, setState) => {
  //console.log('Setting ',state)
  setState(state => state + 1)
}

const Button = ({eventHandle, text}) => {
  //console.log("In button")
  
  return(
    <button onClick={eventHandle}>{text}</button>
  )
}

const DisplayState = ({text, value}) => {
  return(
    <div>{text} {value}</div>
  )
}

const Statistics = ({good, neutral, bad}) => {
  //console.log(good,neutral,bad)
  const total = good + neutral + bad

  if (total === 0)
    return (
      <div>No feedback given</div>
    )
  return (
    <>
      <DisplayState value={good} text='good'/>
      <DisplayState value={neutral} text='neutral'/>
      <DisplayState value={bad} text='bad'/>
      <DisplayState value={total} text='all'/>
      <DisplayState value={(good-bad)/total} text='average'/>
      <DisplayState value={good*100/total + ' %'} text='positive'/>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button eventHandle={() => incrementState(good, setGood)} text='good'/>
      <Button eventHandle={() => incrementState(neutral, setNeutral)} text='neutral'/>
      <Button eventHandle={() => incrementState(bad, setBad)} text='bad'/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App