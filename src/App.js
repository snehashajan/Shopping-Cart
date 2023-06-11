import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Navbar} from "./components/Navbar";
import {Cart} from "./pages/Cart/Cart";
import {Shop} from "./pages/Shop/Shop";
import {ShopContextProvider} from "./context/shop-context";
//import products from "./products";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path = {"/"} element= {<Shop/>} />
          <Route exact path = {"/cart"} element = {<Cart/>}/>
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
