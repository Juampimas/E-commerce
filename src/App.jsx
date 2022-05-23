import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:id' element={<ItemListContainer />}/>
          <Route path='/itemDetail/:id' element={<ItemDetailContainer />}/>
          <Route path='/*' element={<Navigate to="/" replace/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
