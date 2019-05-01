import React, {Component} from 'react';

class Resultado extends Component{


    constructor(props){
        super(props);
        this.cambiar= this.cambiar.bind(this);
      }
    cambiar(e){
        this.props.metodoEquipo();
    }
    render(){
        return(
            <div>

<div className="grafico">
     <div className="sombra"></div>
     <div id="porcion1" className="recorte"><div className="quesito" data-rel="70"></div></div>
     <div id="porcion2" className="recorte"><div className="quesito" data-rel="120"></div></div>
     <div id="porcion3" className="recorte"><div className="quesito" data-rel="25"></div></div>
     <div id="porcionFin" className="recorte"><div className="quesito" data-rel="145"></div></div>
</div>
<div className="container">
                    <div className="row">
                    <div className="input-field col s8">
                            Explicacion : 'Explicacion'
                    </div>
                    </div>
</div>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
            </div>
        )
    }
}
export default Resultado;