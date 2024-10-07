import { useState } from "react";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = () => {
    setGame({
      ...game,
      player: {
        ...game.player,
        name: "Jane",
      },
    });
  };

  return (
    <div className="container">
      <h1>Hello, {game.player.name}!</h1>
      <button className="btn btn-primary" onClick={handleClick}>
        Change Name
      </button>
    </div>
  );
}

export default App;
