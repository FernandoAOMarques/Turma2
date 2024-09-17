// import React from 'react';
// import './Carrossel.css';
// import Tenis from '../Carrossel/Frame53659.png'


// const Carrossel = () => {
//   return (
    
//     <div className='Carrossel'>
//         <div>
//             <p>Melhores ofertas personalizadas</p>
//             <h1>Queima de stoque Nike</h1>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam tempore fugiat cumque, rerum laudantium.</p>
//             <button>Ver oferftas</button>
//         </div>
//         <div className='tenis'> 
//             <img src={Tenis} alt="tenis Nike" />
//         </div>
//         <div class="carousel-indicators">
//             <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
//             <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//             <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//             <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 4"></button>
//         </div>
//     </div>
//   )
// }

// export default Carrossel

// -----------------------------------------------------------------------------------------------------------


// import React from "react";
// import Carousel from "react-bootstrap/Carousel";
// import imagem1 from "./assets/Frame 53659(1).png";
// import imagem2 from "./assets/Frame 53659(2).png";
// import imagem3 from "./assets/Frame 53659(3).png";
// import imagem4 from "./assets/Frame 53659(4).png";
// import imagem5 from "./assets/Frame 53659(5).png";


// import fogo from "./assets/fogo(1).png";

// const CarrosselPage = () => {
//   return (
//     <>
//       <Carousel fade>
//         <Carousel.Item>
//           <Carousel.Caption>
//             <p>Melhores ofertas personalizadas</p>
//             <h1> Queima de stoque Nike <img src={fogo} alt="Imagem de fogo" /></h1>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//             <button>Ver Ofertas</button>
//           </Carousel.Caption>
//           <div>
//             <img src={imagem1} alt="Tenis Nike" />
//           </div>
//           <div>Colocar os pontos do Carrossel</div>
//         </Carousel.Item>
//         <Carousel.Item>
//           <Carousel.Caption>
//             <p>Melhores ofertas personalizadas</p>
//             <h1> Queima de stoque Nike <img src={fogo} alt="Imagem de fogo" /></h1>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//             <button>Ver Ofertas</button>
//           </Carousel.Caption>
//           <div>
//             <img src={imagem2} alt="Tenis Nike" />
//           </div>
//           <div>Colocar os pontos do Carrossel</div>
//         </Carousel.Item>
//         <Carousel.Item>
//           <Carousel.Caption>
//             <p>Melhores ofertas personalizadas</p>
//             <h1> Queima de stoque Nike <img src={fogo} alt="Imagem de fogo" /></h1>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//             <button>Ver Ofertas</button>
//           </Carousel.Caption>
//           <div>
//             <img src={imagem3} alt="Tenis Nike" />
//           </div>
//           <div>Colocar os pontos do Carrossel</div>
//         </Carousel.Item>
//         <Carousel.Item>
//           <Carousel.Caption>
//             <p>Melhores ofertas personalizadas</p>
//             <h1> Queima de stoque Nike <img src={fogo} alt="Imagem de fogo" /></h1>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//             <button>Ver Ofertas</button>
//           </Carousel.Caption>
//           <div>
//             <img src={imagem4} alt="Tenis Nike" />
//           </div>
//           <div>Colocar os pontos do Carrossel</div>
//         </Carousel.Item>
//         <Carousel.Item>
//           <Carousel.Caption>
//             <p>Melhores ofertas personalizadas</p>
//             <h1> Queima de stoque Nike <img src={fogo} alt="Imagem de fogo" /></h1>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//             <button>Ver Ofertas</button>
//           </Carousel.Caption>
//           <div>
//             <img src={imagem5} alt="Tenis Nike" />
//           </div>
//           <div>Colocar os pontos do Carrossel</div>
//         </Carousel.Item>
//       </Carousel>
//     </>
//   );
// };

// export default CarrosselPage;

import './Carrossel.css'
import React from 'react'
import imagem1 from "./Frame 53659(1).png";
import imagem2 from "./Frame 53659(2).png";
import imagem3 from "./Frame 53659(3).png";
// import fogo from "./fogo(1).png";
import imagem4 from "./Frame 53659(4).png";
import imagem5 from "./Frame 53659(5).png";

const Carrossel = () => {
  // const imagens = [imagem1,imagem2,imagem3,imagem4,imagem5]
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div>
        <div className='carrossel-flex'>
        <p>Melhores ofertas personalizadas</p>
          <h1> Queima de stoque Nike </h1>
         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        <button>Ver Ofertas</button>
        </div>
        <div className='imagemCarrossel'>
        <img className="d-block w-100" src={imagem1} alt="First slide"/>
        </div>
        </div>
      </div>
      <div  className="carousel-item">
      <div className='carrossel-flex'>
        <div>
        <p>Melhores ofertas personalizadas</p>
          <h1> Queima de stoque Nike </h1>
         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        <button>Ver Ofertas</button>
        </div>
        <div className='imagemCarrossel'>
        <img className="d-block w-100" src={imagem2} alt="First slide"/>
        </div>
        </div>
      </div>
      <div  className="carousel-item">
      <div className='carrossel-flex'>
        <div>
        <p>Melhores ofertas personalizadas</p>
          <h1> Queima de stoque Nike </h1>
         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        <button>Ver Ofertas</button>
        </div>
        <div className='imagemCarrossel'>
        <img className="d-block w-100" src={imagem3} alt="First slide"/>
        </div>
        </div>
      </div>
      <div  className="carousel-item">
      <div className='carrossel-flex'>
        <div>
        <p>Melhores ofertas personalizadas</p>
          <h1> Queima de stoque Nike </h1>
         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        <button>Ver Ofertas</button>
        </div>
        <div className='imagemCarrossel'>
        <img className="d-block w-100" src={imagem4} alt="First slide"/>
        </div>
        </div>
      </div>
      <div className="carousel-item">
      <div className='carrossel-flex'>
        <div>
        <p>Melhores ofertas personalizadas</p>
          <h1> Queima de stoque Nike </h1>
         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        <button>Ver Ofertas</button>
        </div>
        <div className='imagemCarrossel'>
        <img className="d-block w-100" src={imagem5} alt="First slide"/>
        </div>
        </div>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
      )
}

export default Carrossel
