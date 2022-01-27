import "./App.css";
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Routes,
} from "react-router-dom";
import NavigationBar from "./Components/Nav/index.js";
import About from "./pages/about.js";
import SubmitForm from "./pages/submit.js";
function App() {
   return (
      <div className="App">
         <Router>
            <NavigationBar />
            <Routes>
               <Route path="about" element={About} />
               <Route path="submit" element={SubmitForm} />
            </Routes>
         </Router>

         <header className="App-header">
            <h1>Natural Hairstylez</h1>
         </header>
      </div>
   );
}

export default App;
