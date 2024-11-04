// src/App.jsx
import { useState } from "react";
import "./App.css";
import IngredientList from './components/IngredientList'
import BurgerStack from "./components/BurgerStack";

export const availableIngredients = [
  { name: "Kaiser Bun", color: "saddlebrown" },
  { name: "Sesame Bun", color: "sandybrown" },
  { name: "Gluten Free Bun", color: "peru" },
  { name: "Lettuce Wrap", color: "olivedrab" },
  { name: "Beef Patty", color: "#3F250B" },
  { name: "Soy Patty", color: "#3F250B" },
  { name: "Black Bean Patty", color: "#3F250B" },
  { name: "Chicken Patty", color: "burlywood" },
  { name: "Lettuce", color: "lawngreen" },
  { name: "Tomato", color: "tomato" },
  { name: "Bacon", color: "maroon" },
  { name: "Onion", color: "lightyellow" },
  { name: "Cheddar Cheese", color: "#FDE18B" },
  { name: "Swiss Cheese", color: "#F1E1A8" },
];

// define a function to remove an Ingredient from stack bc i can just only add to stack,$ make function on click in burger stack to remove from stack
const App = () => {
  const [stack, setStack] = useState([]);
  // new function here just like below example filter thru and maybe look at index to make function work
  const addToBurger = (newIngredient)=>{
    setStack([newIngredient, ...stack])
    
  }

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        {
          <>
            <IngredientList availableIngredients={availableIngredients} addToBurger={addToBurger} />
            <BurgerStack stack={stack}/>
          </>
        }
      </section>
    </main>
  );
};


export default App;
