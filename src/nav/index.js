import { useEffect, useRef, useState } from "react";

import './navigation.css';
import Logo from './Logo.png';


function Navigation({selectedID, setSelectedID, links}) {

  return (
    <nav className="navigation-container">
      <img src={Logo} alt="page logo" className="navigation-logo" />
      <div className="navigation-ItemsContainer">
        {links.map((element, id) => {
          return (
            <a href="element" 
              key={id}
              id={`navigation-item${id}`} 
              className={`navigation-item ${id === selectedID ? 'navigation-item--active' : ''}`}
              onClick={(event)=>{
                event.preventDefault();
                setSelectedID(id);
              }}>
              {element}
            </a>
          );
        })}
      </div>
    </nav>
  );
}

export default Navigation;
