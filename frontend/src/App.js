import "./App.css";
// import { Button } from "@chakra-ui/react";
import Homepage from "./Pages/Homepage";
import Chatpage from "./Pages/Chatpage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exac path="/" element={<Homepage />}></Route>
        <Route exac path="/chats" element={<Chatpage />}></Route>
      </Routes>

      {/* <Button colorScheme="blue">Button</Button> */}
    </div>
  );
}

export default App;
