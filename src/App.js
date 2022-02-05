import './Base de datos y estilos/main.css'
import React from "react"
import NavBar from './components/NavBar';
import ItemListContainer from './contenedores/ItemListContainer.js';
import ItemDetailContainer from './contenedores/ItemDetailContainer.js';
import Cart from './components/Cart.js';
import { BrowserRouter, Switch ,Route } from 'react-router-dom/cjs/react-router-dom.min';
import {CartProvider} from './context/CartContext';
import CartWidget from './components/CartWidget.js'


const App = ()=> {

  return (
    <div className="centrado">
        <CartProvider>
            <BrowserRouter>
                <NavBar/>
                <h1>TECNHOGAR SIEMPRE CON VOS</h1>
                <Switch className='body'>
                    <Route exact path='/'>
                        <ItemListContainer/>
                    </Route>
                    <Route exact path='/category/:categoryId'>
                        <ItemListContainer/>
                    </Route>
                    <Route exact path='/item/:itemId'>
                        <ItemDetailContainer/> 
                    </Route>
                    <Route exact path='/cart'>
                        <Cart /> 
                    </Route>
                    <Route exact path='/cart'>
                        <CartWidget /> 
                    </Route>
                </Switch>
            </BrowserRouter>
        </CartProvider>
        </div>
  );
}

export default App;
