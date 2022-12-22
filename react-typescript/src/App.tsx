import React, { useMemo, useCallback, useState } from 'react'

import { List } from './List'

function App() {
  const [counter, setCounter] = useState(0)
  const items = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => ({ id: i, value: Math.random() }))
  }, []);

  const handleDecrement = useCallback(() => {
    setCounter(prev => prev - 1)
  }, [])

  const handleIncrement = useCallback(() => {
    setCounter(prev => prev + 1)
  }, [])

  return (
    <div className="app">
      <List items={items} />
      <hr/>
      <p>Count: {counter}</p>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
      <hr/>
    </div>
  );
}

export default App;
