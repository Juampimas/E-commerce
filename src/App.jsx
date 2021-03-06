import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import CartContextProvider from './context/cartContext';

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path='/category/:categoryId' element={<ItemListContainer />}/>
            <Route path='/itemDetail/:id' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/*' element={<Navigate to="/" replace/>}/>
          </Routes>
        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
