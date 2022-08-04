import React from 'react'
import Navbar from '../components/navbar';
import back_image from '../assets/images/steve-johnson-pUnjVYHjEDo-unsplash.jpg'
import { useNavigate } from 'react-router-dom';
import { flag } from './SignPage';
import { useEffect } from 'react'
const CheckOut = () => {
  const navigate = useNavigate();
  // useEffect(()=>{
    
  //   if(!flag){
  //     navigate('/SignUp');
  //   }
    
  // });
    var cardDrop = document.getElementById('card-dropdown');
var activeDropdown;
if(cardDrop){
cardDrop.addEventListener('click',function(){
  var node;
  for (var i = 0; i < this.childNodes.length-1; i++)
    node = this.childNodes[i];
    if (node.className === 'dropdown-select') {
      node.classList.add('visible');
       activeDropdown = node; 
    };
})
}

const handleClick = () => {
  
  navigate(`/orders`);

};
window.onclick = function(e) {
  console.log(e.target.tagName)
  console.log('dropdown');
  console.log(activeDropdown)
  if (e.target.tagName === 'LI' && activeDropdown){
    if (e.target.innerHTML === 'Master Card') {
      document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/2vbqk5lcpi7hjoc/MasterCard_Logo.svg.png';
          activeDropdown.classList.remove('visible');
      activeDropdown = null;
      e.target.innerHTML = document.getElementById('current-card').innerHTML;
      document.getElementById('current-card').innerHTML = 'Master Card';
    }
    else if (e.target.innerHTML === 'American Express') {
         document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/f5hyn6u05ktql8d/amex-icon-6902.png';
          activeDropdown.classList.remove('visible');
      activeDropdown = null;
      e.target.innerHTML = document.getElementById('current-card').innerHTML;
      document.getElementById('current-card').innerHTML = 'American Express';      
    }
    else if (e.target.innerHTML === 'Visa') {
         document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png';
          activeDropdown.classList.remove('visible');
      activeDropdown = null;
      e.target.innerHTML = document.getElementById('current-card').innerHTML;
      document.getElementById('current-card').innerHTML = 'Visa';
    }
  }
  else if (e.target.className !== 'dropdown-btn' && activeDropdown) {
    activeDropdown.classList.remove('visible');
    activeDropdown = null;
  }
}
const style1={
  float:'left'
};
const style2={
  float:'right',
   textAlign:'right'
};

  return (
    <checkout>
      <Navbar/>
      <img src={back_image} alt="" class="background-image"/>  
        <div class='container'>
        <div class='window'>
          <div class='order-info'>
            <div class='order-info-content'>
              <h2>Order Summary</h2>
                      <div class='line'></div>
              <table class='order-table'>
                <tbody>
                  <tr>
                    <td><img src='https://dl.dropboxusercontent.com/s/sim84r2xfedj99n/%24_32.JPG' class='full-width'></img>
                    </td>
                    <td>
                      <br/> <span class='thin'>Nike</span>
                      <br/> Free Run 3.0 Women<br/> <span class='thin small'> Color: Grey/Orange, Size: 10.5<br/><br/></span>
                    </td>
      
                  </tr>
                  <tr>
                    <td>
                      <div class='price'>$99.95</div>
                    </td>
                  </tr>
                </tbody>
      
              </table>
              <div class='line'></div>
              <table class='order-table'>
                <tbody>
                  <tr>
                    <td><img src='https://dl.dropboxusercontent.com/s/qbj9tsbvthqq72c/Vintage-20L-Backpack-by-Fj%C3%A4llr%C3%A4ven.jpg' class='full-width'></img>
                    </td>
                    <td>
                      <br/> <span class='thin'>Fjällräven</span>
                      <br/>Vintage Backpack<br/> <span class='thin small'> Color: Olive, Size: 20L</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class='price'>$235.95</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class='line'></div>
              <table class='order-table'>
                <tbody>
                  <tr>
                    <td><img src='https://dl.dropboxusercontent.com/s/nbr4koso8dpoggs/6136C1p5FjL._SL1500_.jpg' class='full-width'></img>
                    </td>
                    <td>
                      <br/> <span class='thin'>Monobento</span>
                      <br/>Double Lunchbox<br/> <span class='thin small'> Color: Pink, Size: Medium</span>
                    </td>
      
                  </tr>
                  <tr>
                    <td>
                      <div class='price'>$25.95</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class='line'></div>
              <div class='total'>
                <span style={style1}>
                  <div class='thin dense'>VAT 19%</div>
                  <div class='thin dense'>Delivery</div>
                  TOTAL
                </span>
                <span style={style2}>
                  <div class='thin dense'>$68.75</div>
                  <div class='thin dense'>$4.95</div>
                  $435.55
                </span>
              </div>
      </div>
      </div>
              <div class='credit-info'>
                <div class='credit-info-content'>
                  <table class='half-input-table'>
                    <tr><td>Please select your card: </td><td><div class='dropdown' id='card-dropdown'><div class='dropdown-btn' id='current-card'>Visa</div>
                      <div class='dropdown-select'>
                      <ul>
                        <li>Master Card</li>
                        <li>American Express</li>
                        </ul></div>
                      </div>
                     </td></tr>
                  </table>
                  <img src='https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png' height='80' class='credit-card-image' id='credit-card-image'></img>
                  Card Number
                  <input class='input-field'></input>
                  Card Holder
                  <input class='input-field'></input>
                  <table class='half-input-table'>
                    <tr>
                      <td> Expires
                        <input class='input-field'></input>
                      </td>
                      <td>CVC
                        <input class='input-field'></input>
                      </td>
                    </tr>
                  </table>
                  <button class='pay-btn'onClick={handleClick}>Checkout</button>
      
                </div>
      
              </div>
            </div>
      </div>
    </checkout>
  )
}

export default CheckOut
