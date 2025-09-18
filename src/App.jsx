/*
Sin cambiar la estructura del código jsx, mejora la funcionalidad de la aplicación para que:

- El botón "-" disminuya el número de árboles plantados, pero no permita que el número sea menor que 1.
- El botón "+" aumente el número de árboles plantados.
- Para ello debes crear un botón `ChangeQuantityButton` para cada uno de los botones.
- El componente `ChangeQuantityButton` debe recibir dos props: `label` y `onClick`.

```jsx
import React from "react";

export default function App() {
  return (
    <div className="App">
        <div> - </div>
        <div>{tree} tree</div>
        <div> + </div>
      <div>Plant trees €2.29</div>
    </div>
  );
}
```
*/

import React, { useState } from "react";
import "./App.css";

function ChangeQuantityButton({ label, onClick }) {
  return (
    <div className="button" type="button" onClick={onClick}>
      {label}
    </div>
  );
}

export default function App() {
  const [tree, setTree] = useState(0);

  function handleDecrease() {
    setTree((prev) => {
      if (prev - 1 < 1) {
        return prev;
      }

      return prev - 1;
    });
  }

  function handleIncrease() {
    setTree((prev) => prev + 1);
  }

  return (
    <div className="App">
      <div className="top-panel">
        <ChangeQuantityButton label="-" onClick={handleDecrease} />
        <div>{tree} tree</div>
        <ChangeQuantityButton label="+" onClick={handleIncrease} />
      </div>
      <div className="bottom-panel">Plant trees €2.29</div>
    </div>
  );
}
