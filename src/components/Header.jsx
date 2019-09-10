
import React from 'react';
import { Link } from 'react-router-dom';



function Header() {
  return (
    <div>
      <div>
        <h1 id="nav-title"><Link to="/">Home</Link></h1>
        <Link to="/NewPost"><button className="nav-button">Make new Post</button></Link>
        <Link to="/PostList"><button className="nav-button">All posts</button></Link>
      </div>
    </div>
  );
}

export default Header;