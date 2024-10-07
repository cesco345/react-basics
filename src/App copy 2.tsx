import { useState } from "react";

function App() {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["pepperoni", "cheese", "jalapenos"],
  });
  const handleClick = () => {
    setPizza({
      name: "Margherita",
      toppings: ["tomato", "cheese", "basil"],
    });
  };

  return (
    <div className="container">
      <h1>{pizza.name}</h1>
      <ul>
        {pizza.toppings.map((topping, index) => (
          <li key={index}>{topping}</li>
        ))}
      </ul>
      <button className="btn btn-primary" onClick={handleClick}>
        Change Pizza
      </button>
    </div>
  );
}

export default App;
