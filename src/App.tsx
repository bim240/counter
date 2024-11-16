import React from 'react'
import classes from './styles.module.css'

function App() {
  const [counter, setCounter] = React.useState<number>(0)
  const [stop, setStop] = React.useState<boolean | null>(null)
  var counterIntervalId: string | number | NodeJS.Timer | undefined

  React.useEffect(() => {
    // eslint-disable-next-line eqeqeq
    if (stop == false) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      counterIntervalId = setInterval(() => setCounter(pre => pre + 1), 1000)
    }

    return () => clearInterval(counterIntervalId)
  })

  const submitHandler = () => setStop(false)

  const resetHandler = () => {
    setCounter(0)
    setStop(true)
  }
  const stopHandler = () => {
    setStop(true)
  }

  return (
    <div className={classes.app}>
      <p className={classes.counter}>{counter}</p>

      <button onClick={stop === null || stop ? submitHandler : stopHandler}>
        {stop === null || stop ? 'Start' : 'Pause'}
      </button>
      {/* <button onClick={stopHandler}>Stop</button> */}
      <button onClick={resetHandler}>Reset</button>
    </div>
  )
}

export default App
