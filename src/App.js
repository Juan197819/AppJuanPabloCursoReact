import './App.css'; 
import './components/Navbar.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer.js';

const App = ()=> {
  return (
    <div className="App">
      <header className="App-header"> 
        <NavBar valorCarrito={6}/>
        <ItemListContainer greeting= 'TECNHOGAR SIEMPRE CON VOS'/>
      </header>
    </div>
  );
}

export default App;
