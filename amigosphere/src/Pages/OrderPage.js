import React from 'react'
import back_image from '../assets/images/steve-johnson-pUnjVYHjEDo-unsplash.jpg'
import Navbar from '../components/navbar';
import { useNavigate } from 'react-router-dom';
import { flag } from './SignPage';
import  { useEffect } from 'react'
const OrderPage = () => {
    const navigate = useNavigate();
    // useEffect(()=>{
      
    //   if(!flag){
    //     navigate('/SignUp');
    //   }
      
    // });
  return (
    <orderpage>
        <Navbar></Navbar>
         <img src={back_image} alt="" class="background-image"/>  
    <div class="upper-container">
            <div class="order-placed">
                <img class="accept"src="Images/shopping-cart.png" alt=""/>
              <h2>MY CART</h2>
              <p class="about">Here is the list of the your product, Hope you enjoy the shopping :)</p>
            </div>
            <div class="middle-container"/>
            <table cell spacing="2">
                <thead>
                   <tr>
                       <th class="table-heading">Order Confirmation #</th>
                       <th class="table-heading">Order Information</th>
                       <th class="table-heading">Price</th>
                       <th class="table-heading">Order Details</th>
                      
                       <th class="table-heading">Rate this product now</th>
                      
                   </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="second-col"><img src='https://dl.dropboxusercontent.com/s/sim84r2xfedj99n/%24_32.JPG' class='full-width'></img>
                        </td><br/>
                        <td >Nike<br/>
                            Free Run 3.0 Women<br/>
                            Color: Grey/Orange, Size: 10.5</td>
                           
                        <td>$99.95</td>
                        <td>Delivered on July 22,2021 <br/>9:30pm</td>
                        <td>⭐⭐⭐✰✰</td>
                    </tr>
                 <tr>
                    <td class="second-col"><img src='https://dl.dropboxusercontent.com/s/qbj9tsbvthqq72c/Vintage-20L-Backpack-by-Fj%C3%A4llr%C3%A4ven.jpg' class='full-width'></img></td>
                     <td >Fjällräven<br/>
                        Vintage Backpack<br/>
                        Color: Olive, Size: 20L</td>
                       
                     <td>$235.95</td>
                     <td>Delivered on July 22,2021 <br/>9:30pm</td>
                     <td>⭐⭐✰✰✰</td>
                 </tr>
                 <tr> 
                     <td class="second-col"><img src='https://dl.dropboxusercontent.com/s/nbr4koso8dpoggs/6136C1p5FjL._SL1500_.jpg' class='full-width'></img>
                 </td>
                     <td >Monobento<br/>
                        Double Lunchbox<br/>
                        Color: Pink, Size: Medium</td>
                     <td>$25.95</td>
                     <td>Delivered on July 22 <br/>9:30pm
                     </td>
                     <td>⭐⭐⭐⭐✰</td>
                 </tr><hr/>
                 {/* <!-- <tr>
                    <td>VAT 19%</td>
                    <td>$68.75</td>
                </tr>
                 <tr>
                    <td>Delivery</td>
                    <td>$4.95</td>
                </tr>
                 <tr>
                    <td>TOTAL</td>
                    <td>$435.55</td>
                </tr> --> */}
                
             </tbody>
             </table>
             <hr/>
             <h2 class="bottom-container">No more orders</h2>
            </div>
   
    </orderpage>
  )
}

export default OrderPage