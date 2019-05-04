import React, {Component} from 'react';

class SingUp extends Component {

    constructor(props) {
        
        super(props);
        this.state={
            name: '',
            email: '',
            password: '',
            repassword: ''
        };
        this.cambiar= this.cambiar.bind(this);
        this.cambiarEquipos= this.cambiarEquipos.bind(this);
        this.handleChange= this.handleChange.bind(this);
        this.addUser = this.addUser.bind(this);
	}

    addUser(e) {
        console.log('Entre a post');
        fetch('/api/task/members', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json(res))
            .then(()=> {this.props.metodoRegistroEquipos()})
            .catch(err => console.error(err));

            //Poner redireccioanmiento a "Has sido registrado exitosamente"

        e.preventDefault();
    }
cambiar(e){
	
	{this.props.metodoLogin()} 
	e.preventDefault();
}
handleChange(e) {
    const { name, value } = e.target;
    console.log(e.target)
    this.setState({
        [name]: value

    });
};
cambiarEquipos(e){
    this.props.metodoRegistroEquipos();
}
    render(){
        
        return(
            <div>
           
    <div className="container-signup">
        <div >
            <form onSubmit= {this.addUser}>
                <h2 className="form-title">Create account</h2>
                <div className="form-group">
                    <input type="text" className="form-input" value={this.state.name} name="name" onChange={this.handleChange} placeholder="Your Name"/>
                </div>
                <div className="form-group">
                    <input type="email" className="form-input" value={this.state.email} name="email" onChange={this.handleChange} placeholder="Your Email"/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-input" value={this.state.password} name="password" onChange={this.handleChange} placeholder="Password"/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-input" value={this.state.repassword} name="repassword" onChange={this.handleChange} placeholder="Repeat your password"/>
                </div>
                <div className="form-group">
                    <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                    <label for="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
                </div>
               
                <div className="form-group">
                    <input type="submit" name="submit" className="form-submit"/>
                </div>
            </form>
            
            <p className="loginhere">
                Have already an account ? <a onClick={this.cambiar} className="loginhere-link">Login here</a>
            </p>
        </div>
    </div>

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
export default SingUp; 