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
    <li>
      {text} {value} {text2}
    </li>
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
        <ul>
          <StatisticLine text='good : ' value={good} />
          <StatisticLine text='neutral : ' value={neutral} />
          <StatisticLine text='bad : ' value={bad} />
          <StatisticLine text='all :' value={good + neutral + bad} />
          <StatisticLine text='average : ' value={round((good - bad) / (good + neutral + bad))} />
          <StatisticLine text='positive : ' value={round(good / (good + neutral + bad) * 100)} text2=' %' />
        </ul>
      </div>
    )
  }
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
      </div>
    </div>
  )
}

export default App