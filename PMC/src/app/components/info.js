import React, { Component } from 'react';

class Info extends Component {

    constructor(props) {
        super(props);
        this.state = {
            responsabilidad : '',
            liderazgo: '',
            AperturaAlCambio: '',
            compromiso : ''
        };

        this.cambiar= this.cambiar.bind(this);
    };
    componentDidMount(){
        this.obtenerInformacion();
    }
    obtenerInformacion(){
        fetch('api/task')
        .then(res=> res.json())
        .then(data=>{
            console.log('si sirvio');
           
            
            var numeroApertura = JSON.parse(data[data.length-1].personality.personality[0].raw_score);

            var numeroResponsabilidad = JSON.parse(data[data.length-1].personality.personality[3].raw_score);

            var numeroCompromiso = JSON.parse(data[data.length-1].personality.personality[4].raw_score);

            var numeroLiderazgo = JSON.parse(data[data.length-1].personality.personality[1].raw_score);
            
            
            this.setState({AperturaAlCambio: Math.trunc(numeroApertura*100) });
            this.setState({responsabilidad:Math.trunc(numeroResponsabilidad*100) });
            this.setState({compromiso:Math.trunc(numeroCompromiso*100) });
            this.setState({liderazgo:Math.trunc(numeroLiderazgo*100) });
          
        })
        
    }

    cambiar(){
        this.props.metodoEquipo();
    }
       
        
        
    

    render(){
        return (
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div class="container">
                <div class="p-t-40 p-b-40  text-center">
                    
                        <h2 class="text-center">
                        Observa tus cualidades y caracteristicas de tu personalidad</h2>
</div>
            </div>
        <div >
        <div class="container">
            <div class="p-t-60 p-b-50 ">
                <div class="row feature-list">
                    <div class="col-md-3 ">
                        <h4 class="custom-font title">
                            Resposabiliad</h4>
                        <h1 class="custom-font">
                            <span class="number-animator" data-value="4500" data-animation-duration="800">{this.state.responsabilidad+ "%"}</span></h1>
                        <div class="col-md-8 no-padding">
                            <div class="progress transparent progress-small no-radius ">
                                <div class="progress-bar progress-bar-black animated-progress-bar " data-percentage="79%">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <h4 class="custom-font title">
                            Liderazgo</h4>
                        <h1 class="custom-font">
                            <span class="number-animator" data-value="376" data-animation-duration="800">{this.state.liderazgo+ "%"}</span></h1>
                        <div class="col-md-8 no-padding">
                            <div class="progress transparent progress-small no-radius no-margin">
                                <div class="progress-bar progress-bar-black animated-progress-bar" data-percentage="45%">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <h4 class="custom-font title">
                            Apertura al cambio</h4>
                        <h1 class="custom-font">
                            <span class="number-animator" data-value="19,500" data-animation-duration="800">{this.state.AperturaAlCambio + "%"}</span></h1>
                        <div class="col-md-8 no-padding">
                            <div class="progress transparent progress-small no-radius no-margin">
                                <div class="progress-bar progress-bar-black animated-progress-bar" data-percentage="12%">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <h4 class="custom-font title">
                            Compromiso</h4>
                        <h1 class="custom-font">
                            <span class="number-animator" data-value="19,403" data-animation-duration="800">{this.state.compromiso+ "%"}</span></h1>
                        <div class="col-md-8 no-padding">
                            <div class="progress transparent progress-small no-radius no-margin">
                                <div class="progress-bar progress-bar-black animated-progress-bar" data-percentage="85%">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <center><button  type="submit" onClick={this.cambiar} className="btn light-blue darken-4">Regresar</button></center>
    
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
                <br></br>
                <br></br>
            </div>
        )};
};
export default Info; 