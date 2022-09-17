
import './App.css';
import AllShops from './components/AllShops';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Categories from './components/ShopByCategory/Categories';
import ShopDetails from './components/ShopDetails';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/allshops' element={<AllShops />} />
            <Route exact path='/categories' element={<Categories />} />
            <Route exact path='/shopdetails' element={<ShopDetails />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
