import './App.css'; 
import './components/Navbar.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer.js';

const App = ()=> {
  return (
    <div className="App">
      <header className="App-header"> 
        <NavBar valorCarrito={6}/>
        <ItemListContainer greeting= 'TECNHOGAR SIEMPRE CON VOS'/>
        <ItemDetailContainer />
        
      </header>
    </div>
  );
}

export default App;
