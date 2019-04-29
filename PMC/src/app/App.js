import React, { Component } from 'react';
import Principal from './components/principal';
import Info from './components/info';
import './css/style.css';
import './css/slick-team-slider.css';
import './css/font-awesome.min.css';
//import './css/bootstrap.min.css';
import Login from './components/login';
import Inicio from './components/inicio';




class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showInicio: true,
            showPrincipal: false,
            showInfo: false,
            showLogin: false,
        };
        this.cambiarEstado = this.cambiarEstado.bind(this);
        this.cambiarALogin = this.cambiarALogin.bind(this);
        this.cambiarAInicio= this.cambiarAInicio.bind(this);
        this.cambiarAFormulario= this.cambiarAFormulario.bind(this);
        this.cambiarAInfo = this.cambiarAInfo.bind(this);
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
            showInfo : false
        })
    }
    cambiarAInicio(){
        this.setState({
            showInicio: true,
            showLogin: false,
            showPrincipal: false,
            showInfo: false
        })

    }
    cambiarAFormulario(){
        this.setState({
            howInicio: false,
            showLogin: false,
            showPrincipal: true,
            showInfo: false
        })
    }
    cambiarAInfo(){
        this.setState({
            howInicio: false,
            showLogin: false,
            showPrincipal: false,
            showInfo: true
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
            {this.state.showLogin && <Login metodo={this.cambiarAFormulario}/>}
            {/*formulario*/}
            {this.state.showPrincipal && <Principal metodo2= {this.cambiarAInfo}/>}
            {/*informacion*/}
            {this.state.showInfo && <Info/>}

  
            </div>
        )
    }
}

export default App; 