import React from 'react';
import './App.css';
import Asset from './components/Asset';
import FlexBox from './components/FlexBox';
import Hello from './components/Hello';
import assets from './assets.json'


function App() {
  return (
    <div className="App">
      <Hello />
      <FlexBox>
        {
          assets.map(asset=>
              <Asset
                src = {asset.src}
                name = {asset.name}
                description = {asset.description} />
          )
        }
      </FlexBox>
    </div>
  );
}

export default App;
