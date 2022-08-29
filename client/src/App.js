import './App.css';
import {Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoutes from './protected/ProtectedRoutes';
import AddPage from './pages/AddPage';

function App() {
  return (
    <div >
       <Routes>
          <Route path='/' element={<ProtectedRoutes Components={Home}/>}></Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/addpage" element={<AddPage/>}/>
       </Routes>
    </div>
  );
}

export default App;
