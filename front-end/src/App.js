import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import NavigationBar from "./Components/Nav/index.js";
import About from "./pages/about.js";
import SubmitForm from "./pages/submit.js";
import Home from "./pages/home.js";
function App() {
   return (
      <div className="App">
         <NavigationBar />
         <Routes>
            <Route path="about" element={<About />} />
            <Route path="submit" element={<SubmitForm />} />
            <Route path="home" element={<Home />} />
         </Routes>
      </div>
   );
}

export default App;
