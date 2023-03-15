import "./App.css";
import { useEffect, useState } from "react";
import Orders from "./Components/Orders/Orders";

function App() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    return () => {};
  }, [show]);

  return (
    <div className="App">
      <h1>Pizzeria DH</h1>
      {show ? setShow : <Orders />}
    </div>
  );
}

export default App;
