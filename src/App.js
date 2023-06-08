import React from "react"
import './App.css';
import PersonCard from "./components/PersonCard";


function App() {
  return (
    <div className="App">
      <PersonCard
        lastName={"Jones"}
        firstName={"Robert"}
        age={32}
        initialAge={32}
        hair={"blonde"}
        
      />
      <PersonCard
        lastName={"Grimes"}
        firstName={"Rick"}
        age={42}
        initialAge={42}
        hair={"Dark Brown"}
      />
    </div>
  );
}

export default App;
