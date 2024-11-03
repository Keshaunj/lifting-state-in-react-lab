// src/App.jsx
import { useState } from "react";
import "./App.css";
import "src/components/IngredientList.jsx";
import "src/components/BurgerStack.jsx";

const App = () => {
  const [stack, setStack] = useState([]);
  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        {
          <>
            <IngredientList stack={stack} setStack={setStack} />
            <BurgerStack stack={stack} setStack={setStack} />
          </>
        }
      </section>
    </main>
  );
};
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
export default App;