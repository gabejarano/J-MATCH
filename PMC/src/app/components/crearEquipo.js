import React,{Component} from 'react';

class CrearEquipo extends Component{

    constructor(props){
        super(props);
        this.state={
            showCodigo:false,
            showCrear:false,
            name: "",
            numberMembers: ""
        }
        this.mostrarCodigo= this.mostrarCodigo.bind(this);
        this.mostrarCrear= this.mostrarCrear.bind(this);
        this.cambiar= this.cambiar.bind(this);
        this.getEquipo= this.getEquipo.bind(this);
        this.handleChange= this.handleChange.bind(this);
      }
      handleChange(e) {
        const { name, value } = e.target;
        console.log(e.target)
        this.setState({
            [name]: value
    
        });
    };
    getEquipo(a){
        fetch('/api/task/grupos')
        .then(res=> res.json())
        
    }

      cambiar(e){
        console.log('Entre a post');
        fetch('/api/task/members')
        .then(res=>res.json())
        .then(data=>{
            var idMiembro = data[data.length-1]._id;
            fetch('/api/task/members/'+idMiembro+'/groups', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json(res))
                .then(()=> { this.props.metodoEquipo()})
                .catch(err => console.error(err));
        })
        
        e.preventDefault();
      }
      mostrarCodigo(e){
        this.setState({
            showCodigo:true,
            showCrear: false
        })
      }
      mostrarCrear(e){
          this.setState({
              showCodigo:false,
              showCrear:true
          })
      }
    render(){
        return(
            <div>  
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
                <div className="service-area">
                     <div className="container">
                        <div className="row">
                            <div  className="col-md-4 col-sm-4 col-xs-12 col-6">
                             <div className="service-single">
                                <img src="src/app/assets/img/service/service-img1.png" alt="service image"/>
                                <a onClick={this.mostrarCrear}><h2>Registra tu equipo</h2></a>
                                <p>Toma la iniciativa de medir tu equipo</p>
                             </div>
                            </div>
                            {this.state.showCodigo && <div className="col-md-4 col-sm-4 col-xs-12 col-6"> 
                                                        <form onSubmit={this.cambiar}>
                                                            <div className="form-group">
                                                                <input type="text" className="form-input" name="codigo"  placeholder="Codigo de quipo"/>
                                                            </div>
                                                            <div className="form-group">
                                                                <input type="submit" name="submit" className="form-submit"/>
                                                            </div>
                                                        </form>
                                                    </div>}
                            {this.state.showCrear && <div className="col-md-4 col-sm-4 col-xs-12 col-6"> 
                                                        <form onSubmit={this.cambiar}>
                                                            <div className="form-group">
                                                                <input type="text" className="form-input" value={this.state.name} name="name" onChange={this.handleChange} placeholder="Nombre equipo"/>
                                                            </div>
                                                            <div className="form-group">
                                                                <input type="text" className="form-input" value={this.state.numberMembers} name="numberMembers" onChange={this.handleChange}  placeholder="Numero de integrantes"/>
                                                            </div>
                                                            <div className="form-group">
                                                                <input type="submit" name="submit" className="form-submit"/>
                                                        </div>
                                                        </form>
                                                     </div>}
                    
                <div  className="col-md-4 col-sm-4 col-xs-12 col-6" > 
                    <div className="service-single">
                        <img src="src\app\assets\img\service\service-img3.png" alt="service image"/>
                        <a onClick={this.mostrarCodigo}><h2>Ya tienes equipo</h2></a>
                       <p>Ingresa codigo de tu equipo</p>
                    </div>
                </div>
                
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
                <br></br>
                <br></br>   
           </div>
        )
    }
}
export default CrearEquipo;