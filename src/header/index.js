import { useEffect, useRef, useState } from "react";

import './header.css';
import internetLogo from './internet.svg';

function Header() {

  const [time, setTime] = useState(new Date().toLocaleDateString('en-GB'));

  useEffect(() => {
    let secTimer = setInterval(() => {
      setTime(new Date().toLocaleDateString('en-GB'))
    }, 1000)

    return () => clearInterval(secTimer);
  }, []);

  return (
    <header className="header-container">
      <img src={internetLogo} alt="connection logo" className="header-icon" />
      <h1 className="header-currentTime">{time}</h1>
      <p>Price: 5 ED</p>
    </header>
  );
}

export default Header;
