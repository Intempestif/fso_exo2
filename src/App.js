import React, { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const StatisticLine = ({ text, value, text2 }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value} {text2}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const round = (number) => {
    return Math.round(number * 100) / 100
  }

  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  } else {
    return (
      <div>
        <h2>statistics</h2>
        <table>
          <tbody>
            <StatisticLine text='good' value={good} />
            <StatisticLine text='neutral' value={neutral} />
            <StatisticLine text='bad' value={bad} />
            <StatisticLine text='all' value={good + neutral + bad} />
            <StatisticLine text='average' value={round((good - bad) / (good + neutral + bad))} />
            <StatisticLine text='positive' value={round(good / (good + neutral + bad) * 100)} text2=' %' />
          </tbody>
        </table>
      </div>
    )
  }
}

const Anecdotes = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  // random int between 0 and 6
  const randomNumber = Math.floor(Math.random() * 7)
  const [selectedAnecdote, setSelectedAnecdote] = useState(randomNumber)
  // console.log(selectedAnecdote)

  const handleClick = () => {
    const lastAnecdote = selectedAnecdote
    const randomNumber = Math.floor(Math.random() * 7)
    if(randomNumber === lastAnecdote) {
      // générer nouveau numéro
      const randomNumber = Math.floor(Math.random() * 7)
      setSelectedAnecdote(randomNumber)
    }
    else {
      setSelectedAnecdote(randomNumber)
    }
  }

  return (
    <div>
      <h2>anecdotes</h2>
      <Button text='random anecdote' handleClick={handleClick} />
      <p>{anecdotes[selectedAnecdote]}</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div className='app'>
      <div className="app-card">
        <h1>give your feedback</h1>
        {/* 3 Button components in the same line */}
        <Button text='good' handleClick={() => setGood(good + 1)} />
        <Button text='neutral' handleClick={() => setNeutral(neutral + 1)} />
        <Button text='bad' handleClick={() => setBad(bad + 1)} />

        <Statistics good={good} neutral={neutral} bad={bad} />

        <Anecdotes />
      </div>
    </div>
  )
}

export default App