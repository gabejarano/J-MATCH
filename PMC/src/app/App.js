import React, { Component } from 'react';
import Principal from './components/principal';
import Info from './components/info';
import './css/style.css';
import './css/slick-team-slider.css';
import './css/font-awesome.min.css';
//import './css/bootstrap.min.css';
import Login from './components/login';
import Inicio from './components/inicio';
import SingUp from './components/singUp';
import CrearEquipo from './components/crearEquipo';
import Equipo from './components/Equipo';
import Resultado from './components/resultado';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showInicio: true,
            showPrincipal: false,
            showInfo: false,
            showLogin: false,
            showRegistro:false,
            showRegistriEquipo:false,
            showEquipo:false,
            showResultado: false
        };
        this.cambiarEstado = this.cambiarEstado.bind(this);
        this.cambiarALogin = this.cambiarALogin.bind(this);
        this.cambiarAInicio= this.cambiarAInicio.bind(this);
        this.cambiarAFormulario= this.cambiarAFormulario.bind(this);
        this.cambiarAInfo = this.cambiarAInfo.bind(this);
        this.cambiarARegistro= this.cambiarARegistro.bind(this);
        this.cambiarARegistroEquipos= this.cambiarARegistroEquipos.bind(this);
        this.cambiarAEquipo= this.cambiarAEquipo.bind(this);
        this.cambiarAResultado= this.cambiarAResultado.bind(this);
    };

    cambiarEstado(inicio,login, principal) {
        console.log('LLEgue cambiar estado')
        this.setState({
            showPrincipal: principal,
            showLogin: login,
            showInicio: inicio
        })
        
    }
    cambiarALogin(){
        this.setState({
            showInicio: false,
            showLogin: true,
            showPrincipal: false,
            showInfo : false,
            showRegistro: false,
            showRegistriEquipo:false,
            showEquipo:false,
            showResultado: false
        })
    }
    cambiarAInicio(){
        this.setState({
            showInicio: true,
            showLogin: false,
            showPrincipal: false,
            showInfo: false,
            showRegistro: false,
            showRegistriEquipo:false,
            showEquipo:false,
            showResultado: false
        })

    }
    cambiarAFormulario(){
        this.setState({
            showInicio: false,
            showLogin: false,
            showPrincipal: true,
            showInfo: false,
            showRegistro: false,
            showRegistriEquipo:false,
            showEquipo:false,
            showResultado: false
        })
    }
    cambiarAInfo(){
        this.setState({
            showInicio: false,
            showLogin: false,
            showPrincipal: false,
            showInfo: true,
            showRegistro: false,
            showRegistriEquipo:false,
            showEquipo:false,
            showResultado: false
        })
    }
    cambiarARegistro(){
        this.setState({
            showInicio: false,
            showLogin: false,
            showPrincipal: false,
            showInfo: false,
            showRegistro: true,
            showRegistriEquipo:false,
            showEquipo:false,
            showResultado: false

        })
    }
    cambiarARegistroEquipos(){
        this.setState({

            showInicio: false,
            showLogin: false,
            showPrincipal: false,
            showInfo: false,
            showRegistro: false,
            showRegistriEquipo:true,
            showEquipo:false,
            showResultado: false
        })
    }
    cambiarAEquipo(){
        this.setState({

            showInicio: false,
            showLogin: false,
            showPrincipal: false,
            showInfo: false,
            showRegistro: false,
            showRegistriEquipo:false,
            showEquipo:true,
            showResultado: false
        })
    }
    cambiarAResultado(){
        this.setState({

            showInicio: false,
            showLogin: false,
            showPrincipal: false,
            showInfo: false,
            showRegistro: false,
            showRegistriEquipo:false,
            showEquipo:false,
            showResultado: true
        })
    }
    
    

    render() {
        return (
            <div>
                <nav className="light-blue darken-4">
                     <div className="container">
                            <div className="navbar-header">
                                <a className="brand-logo" href="/">J-Match</a>
                            </div>
                            <div className = "right">
                            <ul>
                            <li><a onClick={this.cambiarAInicio}>Inicio</a></li>
                            <li><a onClick={this.cambiarALogin}>Ingresa</a></li>
                            </ul>
                            </div>
                    </div>            
                </nav>
            {/* Inicio */}
            {this.state.showInicio && <Inicio/>}
            {/* Inicio */}
            {this.state.showLogin && <Login metodoRegistro={this.cambiarARegistro} />}
            {/*formulario*/}
            {this.state.showPrincipal && <Principal metodo2= {this.cambiarAInfo}/>}
            {/*informacion*/}
            {this.state.showInfo && <Info metodoEquipo= {this.cambiarAEquipo}/>}
            {/*registro*/}
            {this.state.showRegistro && <SingUp metodoLogin = {this.cambiarALogin} metodoRegistroEquipos = {this.cambiarARegistroEquipos}/>}
            {/*registroEquipo*/}
            {this.state.showRegistriEquipo && <CrearEquipo metodoEquipo = {this.cambiarAEquipo}/>}
            {/*Mostrar Equipo */}
            {this.state.showEquipo && <Equipo metodoResultado = {this.cambiarAResultado} metodoRegistro={this.cambiarAFormulario} metodo2= {this.cambiarAInfo}/>}
            {/*Mostrar resultado*/}
            {this.state.showResultado && <Resultado metodoEquipo = {this.cambiarAEquipo}/>}

            <div className="footer-bottom">
    <div className="container">
      <div style={{visibility: 'visible', animationName: 'zoomIn'}} className="col-md-12 text-center wow zoomIn">
        <div className="footer_copyright">
          <p> © Copyright, All Rights Reserved.</p>
          <div className="credits">
            Designed by <a >J-Match</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  
            </div>
        )
    }
}

export default App; 