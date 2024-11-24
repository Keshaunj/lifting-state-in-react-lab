import { useState } from "react";

const IngredientList = ({ availableIngredients, addToBurger }) => {
  
  const [addedIngredients, setAddedIngredients] = useState({});

  const handleAdd = (ingredient) => {
 
    addToBurger(ingredient);

   
    setAddedIngredients((prevState) => ({
      ...prevState,
      [ingredient.name]: true,
    }));
  };

  return (
    <ul>
      {availableIngredients.map((ingredient, index) => (
        <li key={index} style={{ backgroundColor: ingredient.color, color: "white", padding: "5px" }}>
          {ingredient.name}
          <button
            onClick={() => handleAdd(ingredient)}
            style={{ marginLeft: "10px" }}
            disabled={addedIngredients[ingredient.name]} 
          >
            +
          </button>
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;
