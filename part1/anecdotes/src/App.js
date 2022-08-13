import { useState } from 'react'

const Header = ({value}) => {
  return (
    <h1>{value}</h1>
  )
}

const Button = ({eventHandle, text}) => {
  return (
    <button onClick={eventHandle}>{text}</button>
  )
}

const DisplayAnecdote = ({anecdote, votes}) => {
  return (
    <>
      <div>{anecdote}</div>
      <div>has {votes} votes</div>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [anecdotePoints, setAnecdotePoints] = useState(new Array(anecdotes.length).fill(0))
  const [maxPointsIndex, setMaxPointsIndex] = useState(0)

  const nextRandomAnecdote = () => {
    const randomIndex = Math.floor( Math.random() * anecdotes.length )
    //console.log('Points',anecdotePoints)
    setSelected(randomIndex)
  }

  const voteAnecdote = () => {
    const tempAnecdotePoints =  [...anecdotePoints]
    tempAnecdotePoints[selected] += 1

    if (anecdotePoints[maxPointsIndex] < tempAnecdotePoints[selected])
      setMaxPointsIndex(selected)
    setAnecdotePoints(tempAnecdotePoints)
  }

  return (
    <>
      <Header value='Anecdote of the day'/>
      <DisplayAnecdote anecdote={anecdotes[selected]} votes={anecdotePoints[selected]} />
      <Button eventHandle={voteAnecdote} text='vote'/>
      <Button eventHandle={nextRandomAnecdote} text='next anecdote'/>
      <Header value='Anecdote with most votes'/>
      <DisplayAnecdote anecdote={anecdotes[maxPointsIndex]} votes={anecdotePoints[maxPointsIndex]} />
    </>
  )
}

export default App