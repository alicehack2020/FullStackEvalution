import './App.css';
import {Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoutes from './protected/ProtectedRoutes';
import AddPage from './pages/AddPage';
import UpdatePage from './pages/UpdatePage';

function App() {
  return (
    <div >
       <Routes>
          <Route path='/' element={<ProtectedRoutes Components={Home}/>}></Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/addpage" element={<AddPage/>}/>
          <Route path="/updatepage" element={<UpdatePage/>}/>
       </Routes>
    </div>
  );
}

export default App;
