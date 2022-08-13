import { useState } from 'react'

const Header = ({value}) => {
  return(
    <h1>{value}</h1>
  )
}
const incrementState = (state, setState) => {
  //console.log('Setting ',state)
  setState(state + 1)
}

const Button = ({eventHandle, text}) => {
  //console.log("In button")
  
  return(
    <button onClick={eventHandle}>{text}</button>
  )
}

const StatisticLine = ({text, value}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
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
    <table>
      <tbody>
        <StatisticLine value={good} text='good'/>
        <StatisticLine value={neutral} text='neutral'/>
        <StatisticLine value={bad} text='bad'/>
        <StatisticLine value={total} text='all'/>
        <StatisticLine value={(good-bad)/total} text='average'/>
        <StatisticLine value={good*100/total + ' %'} text='positive'/>
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header value='give feedback' />
      <Button eventHandle={() => incrementState(good, setGood)} text='good'/>
      <Button eventHandle={() => incrementState(neutral, setNeutral)} text='neutral'/>
      <Button eventHandle={() => incrementState(bad, setBad)} text='bad'/>
      <Header value='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App