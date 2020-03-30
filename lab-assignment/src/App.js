import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div>
      <Header/>
    </div>
  );
}

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.querySelector(".homepage-header-navigation nav").style.top = "0";
//   } else {
//     document.querySelector(".homepage-header-navigation nav").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// }

export default App;
