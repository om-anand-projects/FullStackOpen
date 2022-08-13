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

const DisplayState = ({beforeText, state, afterText}) => {
  return(
    <div>{beforeText} {state} {afterText}</div>
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
      <DisplayState state={good} beforeText='good'/>
      <DisplayState state={neutral} beforeText='neutral'/>
      <DisplayState state={bad} beforeText='bad'/>
      <DisplayState state={total} beforeText='all'/>
      <DisplayState state={(good-bad)/total} beforeText='average'/>
      <DisplayState state={good*100/total} beforeText='positive' afterText='%'/>
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