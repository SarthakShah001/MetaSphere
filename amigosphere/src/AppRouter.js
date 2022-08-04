
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage'
import SignPage from './Pages/SignPage';
import AboutPage from './Pages/AboutPage';
import AvatarChoosing from './Pages/AvatarChoosing';
import AvatarPage from './Pages/AvatarPage';
import CheckOut from './Pages/CheckOut';
import OrderPage from './Pages/OrderPage';
import App from './Unity';
import firebase from './firebase';
function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
       <Route path='/SignUp' element={<SignPage/>} />
       <Route path='/About' element={<AboutPage/>} />
       <Route path='/Choose_your_Avatar' element={<AvatarChoosing/>} />
       <Route path='/Profile' element={<AvatarPage/>} />
       <Route path='/check-out' element={<CheckOut/>} />
       <Route path='/orders' element={<OrderPage/>} />
       <Route path='/world' element={<App/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;