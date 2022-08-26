import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import MyFooter from './features/MyFooter/MyFooter';
import MyHeader from './features/MyHeader/MyHeader';
import MyMain from './features/MyMain/MyMain';
import './i18n/i18n';

function App() {
  return (
    <div className="App">
      <MyHeader />
      <Routes>
        <Route path="/" element={<MyMain />} />
      </Routes>
      <MyFooter />
    </div>
  );
}

export default App;
