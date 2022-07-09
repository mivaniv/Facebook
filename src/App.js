import "./App.css"
import Login from "./Components/Login/Login"
import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomeHeader from "./Components/HomeHeader/HomeHeader"
import { auth } from "./Components/FormAuth/firebase"

function App() {
  const [user, setUser] = useState([]);
  auth.onAuthStateChanged((authUser) => {
    if (authUser) {
      setUser(authUser);
    } else {
      setUser(false);
    }
  });
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>

        <Routes>
          <Route path="/" element={<HomeHeader user={user} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
