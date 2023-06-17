import React from 'react';
import { Link } from 'react-router-dom';

const Navebar = () => {
    return (
        <div class="navbar bg-gray-200">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
    
    </div>
    <Link class="btn btn-ghost normal-case text-xl"  to="/home">Abdullah</Link>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
    <li><Link  to="/home">Home</Link></li>
      <li tabindex="0">
       
        <Link  to="/card">Card</Link>
        <li><Link  to="/prent">Parent</Link></li> 
          <li><Link  to="/account">Account</Link></li>
      
      </li>

    </ul>
  </div>
  <div class="navbar-end">
    <Link  to="/btn" class="btn">Button</Link>
  </div>
</div>
    );
};

export default Navebar;