const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const Sup = () => {
  return (
    <div>
      <p>wassup</p>
    </div>
  )
}

const App = () => {
  const name = "Chris"
  const age = 10
  const friends = [
    {name: 'Peter', age: 4},
    {name: 'Maya', age: 10}
  ]

  return (
    <>
      <h1>Greetings</h1>
      <Hello name = {name} age = {14 + 10}/>
      <Hello name = "Jen" age = {age}/>
      <Sup />
      <div>
        <p>{friends[0].name} {friends[0].age}</p>
        <p>{friends[1].name} {friends[1].age}</p>
      </div>
    </>
    
  )
}

export default App