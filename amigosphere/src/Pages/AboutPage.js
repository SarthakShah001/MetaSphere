
import Navbar from '../components/navbar'
import Image1 from '../assets/images/brecht-corbeel-fGPyyZ1B8cQ-unsplash.jpg'
import Image2 from '../assets/images/images__4_-removebg-preview.png'
import Image3 from '../assets/images/images__5_-removebg-preview (1).png'

const AboutPage = () => {
  return (
    <aboutpage>
        <Navbar/>
        <img src={Image1} alt="" class="background-image"/>  
          <div class="div-row">
            <img class="div-row-img1" src={Image2} alt=""/>
            <h3>Lorem & Ipsum</h3>
            <p>Lorem ipsum dolor sit amet, quis in duis, iaculis id felis. Consectetuer vestibulum, nunc urna lectus, erat ligula. Hendrerit nam, lectus ante, ut lorem eros.</p>
          </div>
          <div class="div-row">
            <img class="div-row-img2" src={Image3} alt=""/>
            <h3>Lorem Ipsum Dolor</h3>
            <p>Lorem ipsum dolor sit amet, mauris sed consectetuer. Etiam et eu, bibendum interdum, lacus quis mauris. Curabitur wisi, quisque vel eu, rutrum nam.</p>
          </div>
        
        <div class="para">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ullam fugit natus voluptates dolor sint sunt adipisci consectetur, nisi error ipsa excepturi quas? Corporis quod laboriosam distinctio earum, excepturi at voluptatum deserunt saepe ad sapiente eos ducimus, iste nulla ea incidunt veniam repellat sed ipsa labore.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatem minus cumque iusto saepe reiciendis magni soluta quod eius adipisci labore, eligendi reprehenderit ad consequuntur dolorem accusamus voluptas voluptate exercitationem nostrum nesciunt enim autem nam officia!.</p>
           
        </div>
        <div class="bottom-container">
            <a class="footer-link" href="https://www.linkedin.com/">LinkedIn</a>
            <a class="footer-link" href="https://twitter.com/">Twitter</a>
            <a class="footer-link" href="https://www.appbrewery.co/">Website</a>
            <a class="footer-link" href="https://www.appbrewery.co/">Website</a>
            <p class="footer-p">© Metacommerce.</p>
          </div>
    </aboutpage>
  )
}

export default AboutPage