// `src/components/BurgerStack.jsx`
const BurgerStack = (props) => {
  return (
    <ul>
      {props.stack.map((ingredient, index) => (
        <li key={index}>{ingredient.name}</li>
      ))}
      ;
    </ul>
  );
};
export default BurgerStack 