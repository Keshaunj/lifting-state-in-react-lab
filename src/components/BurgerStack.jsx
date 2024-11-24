const BurgerStack = (props) => {
  return (
    <ul>
      {props.stack.map((ingredient, index) => (
        <li
          key={index}
          style={{
            backgroundColor: ingredient.color,
            color: "white",
            padding: "5px",
            margin: "5px 0",
          }}
        >
          {ingredient.name}
          <button
            onClick={() => props.rmIngredient(index)}
            style={{
              marginLeft: "10px",
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "3px 6px",
              cursor: "pointer",
            }}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

export default BurgerStack;
