import './Base de datos y estilos/main.css'
import NavBar from './components/NavBar';
import ItemListContainer from './contenedores/ItemListContainer.js';
import ItemDetailContainer from './contenedores/ItemDetailContainer.js';
import { BrowserRouter, Switch ,Route } from 'react-router-dom/cjs/react-router-dom.min';

const App = ()=> {

  const onAdd = ()=>{
    console.log('Se agrego al carrito')   
  }

  return (
    <div className="centrado">
      <BrowserRouter>
        <NavBar valorCarrito={5}/>
        <Switch className='body'>
            <Route exact path='/'>
              <ItemListContainer onAdd={onAdd} greeting= 'TECNHOGAR SIEMPRE CON VOS'/>
            </Route>
            <Route exact path='/category/:categoryId'>
              <ItemListContainer onAdd={onAdd} greeting= 'TECNHOGAR SIEMPRE CON VOS'/>
            </Route>
            <Route exact path='/item/:itemId'>
              <ItemDetailContainer onAdd={onAdd} greeting= 'TECNHOGAR SIEMPRE CON VOS'/> 
            </Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
