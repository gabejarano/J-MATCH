import React, { Component } from 'react';
import Principal from './components/principal';
import Info from './components/info';
import Proyecto from './components/proyecto'



class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            showPrincipal: true,
            showPost: false,
            showList: false
        };
        this.cambiarEstado = this.cambiarEstado.bind(this);
        this.cambiarEstado2 = this.cambiarEstado2.bind(this);
    };

    cambiarEstado(princi, post) {
        console.log('LLEgue cambiar estado')
        this.setState({
            showPrincipal: princi,
            showPost: post
        })
        console.log('Post: ' + this.state.showPost + ',Princ: ' + this.state.showPrincipal)
    }


    cambiarEstado2(post, list) {
        console.log('LLEgue cambiar estado')
        this.setState({
            showPost: post,
            showList: list
        })
        console.log('Post: ' + this.state.showPost + ',Princ: ' + this.state.showPrincipal)
    }
    render() {
        return (
            <div>
                <nav className="light-blue darken-4">
                        <div className="container">
                            <a className="brand-logo" href="/">J-Match</a>
                        </div>
                </nav>
                {/* Formulario */}
                {this.state.showPrincipal && <Principal metodo={this.cambiarEstado} />}
                {/* Despues del Formulario */}
                {this.state.showPost && <Info metodo2={this.cambiarEstado2} />}

                {/* Despues del Personality */}
                {this.state.showList && <Proyecto />}


            </div>
        )
    }
}

export default App; 