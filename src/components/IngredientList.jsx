const IngredientList = (props) => {
  return (
    <ul>
      {props.availableIngredients.map((ingredient, index) => ( 

        <li onClick={()=> props.addToBurger(ingredient)} key={index}>{ingredient.name}</li>

      ))}
    </ul>

  );
};

export default IngredientList