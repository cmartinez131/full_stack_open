import { useState } from 'react'

const StatisticLine = ({ text, value }) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  )
}

const Statistics = ({ good, neutral, bad, total, allClicks}) => {
  const average = ((good - bad) / total) || 0
  const positive = ((good / total) * 100) || 0

  if (total === 0) {
    return (
      <>
        <br></br>
        No feedback given
      </>
    )
  }//added an extra line to show the feedback history in an array
  return (
    <>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticLine text='good' value={good} />
          <StatisticLine text='neutral' value={neutral} />
          <StatisticLine text='bad' value={bad} />
          <StatisticLine text='total' value={total} />
          <StatisticLine text='average' value={average} />
          <StatisticLine text='positive' value={positive} />
        </tbody>
      </table>
      <div>Feedback history: {allClicks.join(' ')}</div>
    </>
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
    <>
      <h1>Give Feedback</h1>
      <table>
        <tbody>
          <tr>
            <td><Button handleClick={handleGoodClick} text='good'/></td>
            <td><Button handleClick={handleNeutralClick} text='neutral' /></td>
            <td><Button handleClick={handleBadClick} text='bad' /></td>
          </tr>
        </tbody>
      </table>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} allClicks={allClicks}/>
    </>
  )
}

export default App
