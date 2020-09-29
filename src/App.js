import React from 'react';
import logo from './logo.svg';
import { DISHES } from './shared/dishes';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';



function App() {
    return ( 
      <div className = "App" >
          <Navbar dark color = "primary" >
            <div className = "container" >
               <NavbarBrand href = "/" > Ristorante Con Fusion </NavbarBrand> 
            </div>
        </Navbar>   
        <Menu dishes = {DISHES }/>
      </div>
    );
}

export default App;