import { useState } from 'react'

const Statistics = ({ good, neutral, bad, total, allClicks}) => {
  const average = ((good - bad) / total) || 0
  const positive = ((good / total) * 100) || 0
  
  if (total === 0) {
    return (
      <div>
        <br></br>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <h2>Statistics</h2>
      <div>good: {good}</div>
      <div>neutral: {neutral}</div>
      <div>bad: {bad}</div>
      <div>total: {total}</div>
      <div>average: {average}</div>
      <div>positive: {positive}%</div>
      <br></br>
      <div>Feedback history: {allClicks.join(' ')}</div>
    </div>
  )
}

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [allClicks, setAll] = useState([])
  
  const handleGoodClick = () => {
    setAll(allClicks.concat('G'))
    setGood(good + 1)
    setTotal(total + 1)
  }

  const handleNeutralClick = () => {
    setAll(allClicks.concat('N'))
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }

  const handleBadClick = () => {
    setAll(allClicks.concat('B'))
    setBad(bad + 1)
    setTotal(total + 1)
  }
  
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGoodClick} text='good'/>
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} total={total} allClicks={allClicks}/>
    </div>
  )
}

export default App