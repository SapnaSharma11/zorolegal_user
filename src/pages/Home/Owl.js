import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Owl() {
  return (
    <OwlCarousel 
    className='owl-theme'
    items="3"
    autoplay
    nav
    dots
    loop
    >
        <div class="app-clients-card">
         <img class="app-clients-image" src="../../../images/client.png" alt=""/>
        <img class="app-clients-ratings" src="../../../images/ratings.svg"  alt=""/>
        <h2>Marry Doe</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel cursus donec faucibus magna ut et interdum pretium. Neque, ut aenean faucibus blandit.</p>
        </div>
        <div class="app-clients-card">
         <img class="app-clients-image" src="../../../images/client.png" alt=""/>
        <img class="app-clients-ratings" src="../../../images/ratings.svg" alt="" />
        <h2>Marry Doe</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel cursus donec faucibus magna ut et interdum pretium. Neque, ut aenean faucibus blandit.</p>
        </div>
        <div class="app-clients-card">
         <img class="app-clients-image" src="../../../images/client.png" alt=""/>
        <img class="app-clients-ratings" src="../../../images/ratings.svg" alt="" />
        <h2>Marry Doe</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel cursus donec faucibus magna ut et interdum pretium. Neque, ut aenean faucibus blandit.</p>
        </div>
        <div class="app-clients-card">
         <img class="app-clients-image" src="../../../images/client.png" alt=""/>
        <img class="app-clients-ratings" src="../../../images/ratings.svg" alt="" />
        <h2>Marry Doe</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel cursus donec faucibus magna ut et interdum pretium. Neque, ut aenean faucibus blandit.</p>
        </div>
        <div class="app-clients-card">
         <img class="app-clients-image" src="../../../images/client.png" alt=""/>
        <img class="app-clients-ratings" src="../../../images/ratings.svg" alt="" />
        <h2>Marry Doe</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel cursus donec faucibus magna ut et interdum pretium. Neque, ut aenean faucibus blandit.</p>
        </div>
    </OwlCarousel>
  )
}