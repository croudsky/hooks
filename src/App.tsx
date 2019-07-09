import React, { FC, useState } from "react";

const App = ({
  props = {
    name: "",
    price: 1000
  }
}) => {
  const [state, setState] = useState(props);
  const { name, price } = state;

  return (
    <>
      <p>
        現在の{name}は、{price}円です。
      </p>
      <button onClick={() => setState({ ...state, price: price + 1 })}>
        +1
      </button>
      <button onClick={() => setState({ ...state, price: price - 1 })}>
        -1
      </button>
      <button onClick={() => setState(props)}>Reset</button>
      <input
        type="text"
        value={name}
        onChange={e => setState({ ...state, name: e.target.value })}
      />
    </>
  );
};

export default App;
