import React from 'react'
import './app.css'
import { Route } from "react-router-dom";

//components
import Navbar from './components/Layout/Navbar/Navbar.jsx'
import Main from './components/Main/Main.jsx'
import Footer from './components/Layout/Footer/Footer.jsx'


function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* El componente "Main" se encargará de renderizar todo lo que aparezca en la ventana principal */}
      <Route exact path='/' component={Main}/>
      <Footer/>
    </div>
  );
}

export default App;
