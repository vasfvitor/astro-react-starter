import { useState } from 'react';
import './Counter.css';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <div className="counter">
        <p>Current Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}
