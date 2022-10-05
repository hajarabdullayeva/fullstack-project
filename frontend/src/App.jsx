import "./App.css";
import {Routes, Route} from "react-router-dom"
import {ChakraProvider} from '@chakra-ui/react'
import Header from "./components/Header";
import Home from "./pages/Home"
import About from "./pages/About";
import Users from "./pages/Users";
import AddUser from "./pages/Users/AddUser.jsx";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/add-user" element={<AddUser/>}/>
        </Routes>
      </div>
    </ChakraProvider>
  );
}

export default App;
