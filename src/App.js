import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Component/Navbar'
import Home from './Pages/Home'
import Cart from './Pages/Cart'

function App() {
  return (
         <BrowserRouter>
              <Navbar/>
              <Routes>
                   <Route exact path="/" element={<Home/>}/>
                   <Route exact path="/cart" element={<Cart/>}/>
              </Routes>
         </BrowserRouter>
  );
}

export default App;
