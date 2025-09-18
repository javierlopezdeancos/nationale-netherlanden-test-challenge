# Nationale Netherlanden Test Challenge

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

## Arrancar el proyecto

1. Clona el repositorio

```shell
git clone git@github.com:javierlopezdeancos/nationale-netherlanden-test-challenge.git
```

2. Instala las dependencias y arranca el proyecto

```shell
npm install
npm run dev
```
