import "./App.css";
import CharacterCard from "Componets/pages/Cards/CharacterCard";
import { Text } from "@chakra-ui/react";
function App() {
  return (
    <div className="App">
      <Text as="h1">LOTR</Text>
      <CharacterCard />
    </div>
  );
}

export default App;
