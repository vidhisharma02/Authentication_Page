import 'bootstrap/dist/css/bootstrap.min.css'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';  // ✅ Import Navbar
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import './App.css';  // ✅ Import CSS file
import './Navbar.css';
import './index.css';
import './Register.css';
import './Login.css';




function App() {
  return (
    <BrowserRouter>
      <Navbar />  {/* ✅ Add Navbar Here */}
      <Routes>
        <Route path="/register" element={<Signup />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;