
import React, { useEffect, useState } from 'react'
import '../assets/references/style/avtar.scss'
import image from '../assets/images/Side-image_signup.png'
import back_image from '../assets/images/steve-johnson-pUnjVYHjEDo-unsplash.jpg'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import  {userID} from './SignPage'
import { flag } from './SignPage';
const AvatarPage = () => {

 console.log(flag);
  const navigate = useNavigate();
  // useEffect(()=>{
    
  //   if(!flag){
  //     navigate('/SignUp');
  //   }
    
  // });
  const handleClick = () => {
    
    navigate(`/Choose_your_Avatar`);
  
};
const handleClick1 = () => {
    
  navigate(`/world`);

};
  return (
  <avatarpage>
    <Navbar/>
  <body class="content">
  <img src={back_image} alt="" class="background-image"/>  
    <div class="profile">
      <img  class="user-img" src={image} type="glb"alt="" />  
      {/* <!-- <img class="user-img" src="Images/" alt=""> --> */}
      <h2>WELCOME {userID}</h2>
      <a class="btn-content-wrapper" onClick={handleClick1}>EXPLORE THE WORLD</a> OR
  <a class="btn-content-wrapper" onClick={handleClick}>MODIFY MY LOOK</a>
    </div>
    </body>
  </avatarpage>
  )
}

export default AvatarPage