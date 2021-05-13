import React from 'react';
import './Home.css';


export default function Home() {
    return (
        <div>
       <header>
  <nav>
    <h2><a href="#" id="logo">LOGO</a></h2>
    <button className="nav-button fa fa-bars"></button>
    <div>
  <ul> 
      <ul>
        <button className="exit-menu fa fa-times"></button>
        <li><a href="#" className="active">home</a></li>
        <li><a href="#">carta</a></li>
        <li><a href="#">contacto</a></li>
        <li><a href="#">sobre nosotros</a></li>
        <li><a href="#">galería</a></li>
      </ul>
 </ul>
    </div>
  </nav>
  <div className="center">
    <h1 className="alex-brush">Bienvenido</h1>
    <h2>Pósito</h2>
    <span id="asterisk">*</span>
    <p>Pesquero</p>
  </div>
</header>

<section className="add-padding add-flex">
  <div className="center-text">
    <h1 className="alex-brush"><span className="custom-font">Descubre</span><br />nuestra historia</h1>
    <h2>*</h2>
    <p>Aquí te inventas una película sobre el restaurante en plan traemos el mejor caldo desde crevillente y estamos dotados de un gran equipo bla bla bla... y se supone que la foto de bajo pones una foto del restaurante</p>
    <a href="#">Sobre nosotros</a>
  </div>
  <div  className="stuffed-cherries" data-aos="fade-left" data-aos-delay="300">
  </div>
</section>

<section className="bread-background center-h1">
  <h1 className="custom-h1 alex-brush"><span className="custom-font">Menús</span><br />diarios </h1>
</section>

<section className="menu add-flex add-padding">
  <div className="menu-images">
    <img src="http://www.konoba-mirakul.com/wp-content/uploads/2015/03/delikatesa4.jpg"  data-aos="fade-down" data-aos-delay="300"/>
    <img src="http://www.konoba-mirakul.com/wp-content/uploads/2015/03/delikatesa21.jpg" data-aos="fade-left" data-aos-delay="300"/>
    <img src="https://www.gourmetsociety.co.uk/uploads/images/restaurants/093ce538894c95892f62dc93bb023636-image.png" data-aos="fade-right" data-aos-delay="300"/>
    <img src="http://www.konoba-mirakul.com/wp-content/uploads/2015/03/delikatesa4.jpg" data-aos="fade-up" data-aos-delay="300"/>
  </div>
  <div className="center-text">
    <h1><span className="custom-font alex-brush">Nuestra</span><br />Carta</h1>
    <h2>*</h2>
    <p>Aquí les vendemos una cocina fusión entre tabarca,elche y la bahía de sp que bla bla blabla y arriba ponemos una fotos vacilonas de los platos</p>
    <a href="#">Ver carta</a>
  </div>
</section>

<section className="cake-background center-h1">
  <h1 className="custom-h1"><span className="custom-font alex-brush">Mas foticos</span><br />Vacilonas</h1>
</section>

<section className="add-flex reservation-section">
  <div className="center-text add-padding">
    <h1><span className="custom-font alex-brush">Platos</span><br />de temporada</h1>
    <h2>*</h2>
    <p>aquí pues lo que veas o metes los platos estrella o platos de temporada o pones el menu del día o menu de grupos vamos lo que gustes papi ;) </p>
    <a href="#">haz tu reserva aquí</a>
  </div>
  <div>
    <img src="http://www.konoba-mirakul.com/wp-content/uploads/2015/03/kulinarstvo11.jpg" data-aos="fade-up" data-aos-delay="300"/>
    <img src="http://www.konoba-mirakul.com/wp-content/uploads/2015/03/kulinarstvo21.jpg" data-aos="fade-down" data-aos-delay="300"/>
  </div>
</section>

<footer>
  <button className="to-top"><i className="fa fa-chevron-up"></i>TOP</button>
  
  <div className="restaurant-info">
  
    <div className="locations">
      <h4>UBICACIÓN</h4>
      <div className="location-1">
        <h5>Puerto 123<br />Santa Pola 123</h5>
      </div>
    </div>

    <div className="hours">
      <h4>HOURS</h4>
      <div className="weekdays">
        <h5>Martes-Domingo<br />
          11:30pm - 1:00am
        </h5>
      </div>
      
      <div className="weekends">
        <h5>Lunes<br />
          Chapao que <br></br>la peña descansa
        </h5>
      </div>
      
      <div className="private-events">
        <h5>Available for private<br />
          events and party <br></br>loca
        </h5>
      </div>
      
    </div>
    
  </div>
  
  <div className="copyright">
    <p><small>Copyright 2021 &#169; Handcrafted with love by Chipiriguino</small></p>
  </div>
  
</footer>

        </div>
    )
}
