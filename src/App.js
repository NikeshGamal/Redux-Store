import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Component/Navbar'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import store from "./store/store";
import {Provider} from 'react-redux'

function App() {
  return (
         <BrowserRouter>
             <Provider store={store}>
                 <Navbar/>
                 <Routes>
                      <Route exact path="/" element={<Home/>}/>
                      <Route exact path="/cart" element={<Cart/>}/>
                 </Routes>
              </Provider>
         </BrowserRouter>
  );
}

export default App;
