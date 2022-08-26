import React from 'react';
import './App.scss';
import MyFooter from './features/MyFooter/MyFooter';
import MyHeader from './features/MyHeader/MyHeader';
import MyMain from './features/MyMain/MyMain';

function App() {
  return (
    <div className="App">
      <MyHeader />
      <MyMain />
      <MyFooter />
    </div>
  );
}

export default App;
