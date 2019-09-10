  
import React from 'react';
import { Link } from 'react-router-dom';



function Header(){
  return (
    <div>
      <div>
        <h1 id="nav-title"><Link to="/">Home</Link></h1> 
        <Link to="/secondpage"><button class="nav-button">SecondPage</button></Link>
      </div>
    </div>
  );
}

export default Header;