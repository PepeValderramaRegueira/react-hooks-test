import React, { useState } from 'react'

export default () => {
  const [counter, setCounter] = useState(0)

  return (
    <div className="counter">
      <span>Counter: {counter}</span>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  )
}
