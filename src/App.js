import { useEffect, useRef, useState } from "react";

import Header from './header';
import Navigation from './nav';
import Main from './main';
import './App.css';


function App() {
  const [selectedID, setSelectedID] = useState(0);
  const links = ['gossip', 'opinion', 'weather', 'tech', 'lifestyle', 'local', 'business', 'world'];

  return (
    <div className="App" tabIndex="-1">
      <Header></Header>
      <Navigation selectedID={selectedID} setSelectedID={setSelectedID} links={links}></Navigation>
      <Main selectedID={selectedID} links={links}></Main>
    </div >
  );
}

export default App;
