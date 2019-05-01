import React, {Component} from 'react';


class Login extends Component{
	constructor(props) {
		super(props);
	    this.cambiar= this.cambiar.bind(this);
	}

cambiar(e){
	
	{this.props.metodoRegistro()} 
	e.preventDefault();
}
    render(){
        return(
            <div>


<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

<div className="container h-100" id="login">
		<div className="d-flex justify-content-center h-100">
			<div className="user_card">
				<div className="d-flex justify-content-center">
					<div className="brand_logo_container">
						<img src="https://scontent.fbga1-4.fna.fbcdn.net/v/t1.0-9/53886067_310029216378551_5159718609831854080_n.png?_nc_cat=105&_nc_ht=scontent.fbga1-4.fna&oh=6fd859b25a73d7e3a4c870216ad09d66&oe=5D4126FB" class="brand_logo" alt="Logo"/>
					</div>
				</div>
				<div className="d-flex justify-content-center form_container">
					<form>
						<div className="input-group mb-3"  >
							<div className="input-group-append">
								<span className="input-group-text"><i className="fas fa-user"></i></span>
							</div>
							<input type="text" name="" className="form-control input_user" value="" placeholder="username"/>
						</div>
						<div className="input-group mb-2">
							<div className="input-group-append">
								<span className="input-group-text"><i class="fas fa-key"></i></span>
							</div>
							<input type="password" name="" className="form-control input_pass" value="" placeholder="password"/>
						</div>
						<div className="form-group">
							<div className="custom-control custom-checkbox">
								<input type="checkbox" className="custom-control-input" id="customControlInline"/>
								<label className="custom-control-label" for="customControlInline">Remember me</label>
							</div>
						</div>
					</form>
				</div>
				<div className="d-flex justify-content-center mt-3 login_container">
					<button type="button" name="button" className="btn login_btn">Login</button>
				</div>
				<div className="mt-4">
					<div className="d-flex justify-content-center links" >
						Don't have an account?  <button><a onClick= {this.cambiar} className="ml-2">Sign Up</a></button>
					</div>
					<div className="d-flex justify-content-center links">
						<a href="#">Forgot your password?</a>
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
            </div>
        )};

};
export default Login;