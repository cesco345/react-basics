import { useState } from "react";

function App() {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1, price: 100 },
      { id: 2, title: "Product 2", quantity: 2, price: 200 },
      { id: 3, title: "Product 3", quantity: 3, price: 300 },
    ],
  });
  const handleClick = () => {
    setCart({
      ...cart,
      discount: 0.2,
      items: cart.items.map((item) => ({
        ...item,
        price: item.price * (1 - cart.discount),
      })),
    });
  };

  return (
    <div className="container">
      <h1>Cart</h1>
      <ul>
        {cart.items.map((item, index) => (
          <li key={index}>
            {item.title} - {item.quantity} x {item.price}
          </li>
        ))}
      </ul>
      <button className="btn btn-primary" onClick={handleClick}>
        Apply Discount
      </button>
    </div>
  );
}

export default App;
