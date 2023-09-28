import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbar from './component/Navbar';
import Home from './component/Home';
import Register from './component/Register';
import { Routes, Route } from "react-router-dom";
import Edit from './component/Edit';
import Detail from './component/Detail';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/register' Component={Register} />
        <Route exact path='/edit/:id' Component={Edit} />
        <Route exact path='/view/:id' Component={Detail} />
      </Routes>
    </>
  );
}


export default App;
