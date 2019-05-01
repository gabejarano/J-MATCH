import React, {Component} from 'react';

class Inicio extends Component{
    render(){
        return(
            <div>
                <div id="banner" className ="section-padding">
   <div className="container">
     <div className="row">
       <div className="jumbotron">
         <h1 className="small">Bienvenido a <span className="bold">J-Match</span></h1>
         <p className="big">Encuentra tu proyecto ideal.</p>
       </div>
     </div>
   </div>
 </div>
  <div id="service" className="section-padding">
    <div className="container">
    <div className="page-title text-center">
          <h1>Nuestros servicios</h1>
          <p>Encuentra tu equipo ideal para tu proyecto ideal </p>
          <hr className="pg-titl-bdr-btm"></hr>
    </div>
      <div className="row">
       
        <div className="col-md-4">
          <div className="service-box">
            <div className="service-icon"><i className="fa fa-picture-o"></i></div>
            <div className="service-text">
              <h3>Hazte a conocer</h3>
              <p> Publica tu idea para que las personas ideales puedan trabajar contigo</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="service-box">
            <div className="service-icon"><i className="fa fa fa-code"></i></div>
            <div className="service-text">
              <h3>Desarrolla</h3>
              <p> Luego de que encuentres tu equipo ideal, ¡Desarrollalo! </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="service-box">
            <div className="service-icon"><i className="fa fa-diamond"></i></div>
            <div className="service-text">
              <h3>Insight personality</h3>
              <p> La app utiliza un algoritmo que permite conocer la personalidad de las personas y así armar el  mejor equipo para ti segun estudios de prestigiosas universidad como MIT </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer className="footer section-padding">
    <div className="container">
      <div className="row">
        <div style={{visibility: 'visible', animationName: 'zoomIn'}} className="col-sm-12 text-center wow zoomIn">
          <h3>Siguenos</h3>
          <div className="footer_social">
            <ul>
              <li><a className="f_facebook" href="https://www.facebook.com/J-Match-310028956378577/?modal=admin_todo_tour"><i className="fa fa-facebook"></i></a></li>
              <li><a className="f_twitter" href=""><i className="fa fa-twitter"></i></a></li>
              <li></li>
              <li><a className="f_linkedin" href="" ><i className="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  

            </div>
        )
    }
};
export default Inicio;