import React from 'react';
// import logo from './logo.svg';
import './App.css';

// import data (infos) to show in the InfoList
import infos from './infos.json';

// two main components to show in App component
import InfoList from './components/InfoList.js';
import Ironhack from './components/Ironhack.js';

// MDH: apparently the Main component
function App() {
  // we've got two components showing top to bottom
  return (
    <div className="App">
      <Ironhack 
        logo_image="./assets/images/ironhack-logo.svg"
        menu_image="./assets/images/menu-top.svg"
        title="Say hello to ReactJS"
        text="You will learn a Frontend framework from scratch to become a Ninka Developer."
      />
      <InfoList infos={infos}/>
    </div>
  );
}

export default App;
