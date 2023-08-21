import { useState } from 'react'

const Title = ({ title }) => <h1>{title}</h1>

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const StatisticRow = ({ counter, text }) => <div>{text} {counter}</div>
const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good - bad)/all;
  const positive = 100*good/all;
  return (
    <>
      <StatisticRow counter={good} text="good" />
      <StatisticRow counter={neutral} text="neutral" />
      <StatisticRow counter={bad} text="bad" />
      <StatisticRow counter={all} text="all" />
      <StatisticRow counter={average} text="average" />
      {/* <StatisticRow counter={positive} text="positive" /> */}
      <div>positive {positive} %</div>
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
      <Title title='give feedback' />
      <Button handleClick={() => { setGood(good + 1) }} text='good' />
      <Button handleClick={() => { setNeutral(neutral + 1) }} text='neutral' />
      <Button handleClick={() => { setBad(bad + 1) }} text='bad' />
      <Title title='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App