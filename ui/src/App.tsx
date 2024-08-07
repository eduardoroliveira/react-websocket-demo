import { useEffect, useState } from "react";
import "./App.css";

type Animal = { name: string };

function App() {
  const [animals, setAnimals] = useState<Animal[]>([]);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:4646");
    ws.onopen = () => console.log("Websocket is connected");
    ws.onmessage = (event) => {
      let readAnimals = JSON.parse(event.data);
      if (typeof readAnimals === "string") {
        // For some reason it comes double stringed
        // when coming from python websocket server...
        readAnimals = JSON.parse(readAnimals);
      }
      setAnimals(readAnimals);
    };
    () => {
      ws.close();
    };
  }, []);
  return (
    <div className="animalCardContainer">
      {animals?.map((animal) => (
        <div className="animalCard" key={animal.name}>
          {animal.name}
        </div>
      ))}
    </div>
  );
}

export default App;
