import React from 'react'
import Pexels from '../assets/videos/Pexels.mp4'
import '../assets/references/style/styles.scss'
import Navbar from '../components/navbar'
import image from '../assets/images/endroit-secret-mxTJm9ojjPE-unsplash.jpg'
import { useNavigate } from 'react-router-dom';
import { setDoc } from 'firebase/firestore'
const HomePage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    
      navigate(`/SignUp`)
    
  };

  return (
    <frontpage id="frontpage">
      <Navbar/>
      {/* <video id="background-video" autoPlay playsInline loop muted src={Pexels} >
            {/* <source src={Pexels} type="video/mp4" /> */}
        {/* </video> */} 
        <img src={image} alt="" class="background-image"/> 
        <div class="content">
            <h1>ENTER THE METACOMMERCE</h1>
            <h2>THE FUTURE OF SHOPPING WITH METAVERSE</h2>
            <p class="first-div">Play, Create , Own and Shop in virtual world made by players </p>
            <a class="btn" onClick={handleClick}>Create Account</a>
        </div>
        </frontpage>
  )
  
}

export default HomePage