import React, { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Statistics = ({good, neutral, bad}) => {
  return (
    <div>
      <h2>statistics</h2>
        <ul>
          <li>good : {good}</li>
          <li>neutral : {neutral}</li>
          <li>bad : {bad}</li>
          <li>all : {good + neutral + bad}</li>
        
          <AveragePositive good={good} neutral={neutral} bad={bad} />
          
        </ul>
    </div>
  )
}

const AveragePositive = ({good, neutral, bad}) => {

  // fonction pour arrondir l'entrée
  const round = (number) => {
    return Math.round(number * 100) / 100
  }

  if(good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <li>average : 0</li>
        {/* calculer le pourcentage de vote à good avec deux chiffres après la virgule */}
        <li>positive : 0 %</li>
      </div>
    )
  } else {
    return (
      <div>
        <li>average : {round((good - bad) / (good + neutral + bad))}</li>
        {/* calculer le pourcentage de vote à good avec deux chiffres après la virgule */}
        <li>positive : {round(good / (good + neutral + bad) * 100)} %</li>
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