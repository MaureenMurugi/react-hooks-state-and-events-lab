import React, { useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [isLight, setIsLight] = useState(false)

  function handleLight() {
    setIsLight((isLight) => !isLight)
  }

  //const appClass = false ? "App dark" : "App light"

  return (
    <div className={isLight ? "App dark" : "App light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleLight}>{isLight ? "Dark mode" : "Light mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
