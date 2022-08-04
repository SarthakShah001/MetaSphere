import React, { useState,useEffect } from 'react'
// import '../assets/references/style/sign-in.scss'
import image from '../assets/images/steve-johnson-pUnjVYHjEDo-unsplash.jpg'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import{db}from'../firebase'
import { collection,getDocs,addDoc } from 'firebase/firestore';
import { async } from '@firebase/util';
let userID="";
let flag =true;
const SignPage = () => {
  userID="";

  const [users,setUsers]=useState([]);
  const navigate = useNavigate();
  const userCollectionRef= collection(db,"User");
  useEffect(()=>{
    const getUsers = async()=>{
      const data = await getDocs(userCollectionRef);
      console.log(data);
      // setUsers(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
      data.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        setUsers(users.push(doc.data(),doc.id));
      });
    }
    getUsers();
    console.log(users);
    const mailId = document.getElementById("user");
    const passwor = document.getElementById("pass");
  const loginButton = document.getElementById("submit");
  const loginErrorMsg = document.getElementById("login-error-msg");
  const signupButton = document.getElementById("signup");
  const username = mailId.value;
  
  loginButton.addEventListener("click", (e) => {
      e.preventDefault();
      const username = mailId.value;
      const password = passwor.value;
      let a=1;
      users.map((user)=>{
        if (user.Email === username && user.Password === password) {
          a=0;
         userID=user.Username;
          navigate(`/Profile`);
      } 
  
      });
      if(a){
        loginErrorMsg.innerHTML="Invalid Username and/or Password.";
        loginErrorMsg.style.opacity = 1;
      }
      
  })
  signupButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username= document.getElementById("signupuser");
      const passwor = document.getElementById("signuppass");
    const mailId= document.getElementById("signupemail");
    const repeatpass=document.getElementById("repeatpass");
    console.log(passwor.value+" "+repeatpass.value);
    let a=1;
    const checkmail=async()=>{
      
    users.map((user)=>{
      console.log("x");
      if (user.Email === mailId.value ) {
        a=0;
        loginErrorMsg.innerHTML="MailId already exists.";
    loginErrorMsg.style.opacity = 1;
    } 

    });
    }
   if(passwor.value===repeatpass.value){
    
    checkmail();
    const createUser=async()=>{
      await addDoc(userCollectionRef,{Username:username.value,Password:passwor.value,Email:mailId.value});
    }
    if(a){
      createUser();
      userID=username.value;
      navigate(`/Profile`);
    }
    
  }
  else{
    
    loginErrorMsg.innerHTML="Passwords do not match";
    loginErrorMsg.style.opacity = 1;
  }
  })
},[]);



  // const handleClick = () => {

  //     navigate(`/Profile`);
    
  // };

  return (
    <signpage>
      
      <Navbar/>
      {/* {
        users.map((user)=>{
          return(
            <div>
              <h1>name:{user.Username}</h1>
            </div>
          )
        })
      } */}
    <img src={image} alt="" class="background-image"/> 
    <div id="login-error-msg-holder">
      <p id="login-error-msg">Invalid username <span id="error-msg-second-line">and/or password</span></p>
    </div> 
    
    <div class="login-wrap">
        <div class="login-html">
            <input id="tab-1" type="radio" name="tab" class="sign-in" checked/><label for="tab-1" class="tab">Sign In</label>
            <input id="tab-2" type="radio" name="tab" class="sign-up"/><label for="tab-2" class="tab">Sign Up</label>
            <div class="login-form">
                <div class="sign-in-htm">
                    <div class="group">
                        <label for="user" class="label">Mail Id</label>
                        <input id="user" name="Mail Id" type="text" class="input"/>
                    </div>
                    <div class="group">
                        <label for="pass" class="label">Password</label>
                        <input id="pass" name ="password" type="password" class="input" data-type="password"/>
                    </div>
                    <div class="group">
                        <input id="check" type="checkbox" class="check" checked/>
                        <label for="check"><span class="icon"></span> Keep me Signed in</label>
                    </div>
                    <div class="group">
                       
                        <input type="submit" id="submit"  class="button"  value="Sign In" />
        
                        {/* <!-- <a href="user.html"></a> --> */}
                    </div>
                    <div class="hr"></div>
                    <div class="foot-lnk">
                        <a href="#forgot">Forgot Password?</a>
                    </div>
                </div>
                
                <div class="sign-up-htm">
                
                    <div class="group">
                        <label for="user" class="label">Username</label>
                        <input id="signupuser" type="text" class="input"/>
                    </div>
                    <div class="group">
                        <label for="pas" class="label">Password</label>
                        <input id="signuppass" type="password" class="input" data-type="password"/>
                    </div>
                    <div class="group">
                        <label for="pass" class="label">Repeat Password</label>
                        <input id="repeatpass" type="password" class="input" data-type="password"/>
                    </div>
                    <div class="group">
                        <label for="pass" class="label">Email Address</label>
                        <input id="signupemail" type="text" class="input"/>
                    </div>
                    <div class="group">
                        
                        <input type="submit" id="signup"class="button"  value="Sign Up"/>
                    
                    </div>
                    <div class="hr"></div>
                    <div class="foot-lnk">
                        <label for="tab-1">Already Member?</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
      </signpage>
  )
}
console.log(flag);
export{flag};
export {userID};
export default SignPage