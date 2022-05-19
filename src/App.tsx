import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import ProfilePage from "./Components/ProfilePage";
import MainPage from "./Components/MainPage";
import Blog from "./Components/Blog";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to={'/profile'}> ProfilePage </Link>
        <Link to={'/'}> Main page </Link>
        <Link to={'/blog'}> Blog </Link>
      </header>
      <Routes>
        <Route path={'/'} element={<MainPage/>}/>
        <Route path={'/profile'} element={<ProfilePage/>}/>
        <Route path={'/blog'} element={<Blog/>}/>
      </Routes>
    </div>
  );
}

export default App;

// <ProfilePage/>
// <MainPage/>
// <Blog/>
