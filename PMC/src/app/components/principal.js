import React, { Component } from 'react';


class Principal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            sex: '',
            document: '',
            description: '',
            projects: '',
            profile: '',
            qualities: '',
            achievement: ''
        };
        this.addUser = this.addUser.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };
    addUser(e) {
        console.log('Entre a post');
        fetch('/api/task', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json(res))
            .then(()=> {this.props.metodo2()})
            .catch(err => console.error(err));

            //Poner redireccioanmiento a "Has sido registrado exitosamente"

        e.preventDefault();
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value

        });
    };
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s10">
                        <div className="card">
                            <div className="card-content">
                                <form onSubmit={this.addUser}>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <h6>Nombre</h6>
                                            <input value={this.state.name} name="name" onChange={this.handleChange} type="text" placeholder="Nombre" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <h6>Edad</h6>
                                            <input value={this.state.age} name="age" onChange={this.handleChange} type="text" placeholder="Edad" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <h6>Sexo</h6>
                                            <input value={this.state.sex} name="sex" onChange={this.handleChange} type="text" placeholder="Sexo" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <h6>Cedula</h6>
                                            <input value={this.state.document} name="document" onChange={this.handleChange} type="text" placeholder="Cedula" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <h6>Descríbete a ti mismo</h6>
                                            <input value={this.state.description} name="description" onChange={this.handleChange} type="text" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <h6>Describe los proyectos en los que has trabajado</h6>
                                            <input value={this.state.projects} name="projects" onChange={this.handleChange} type="text" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <h6>¿Cuál es tu perfil profesional?</h6>
                                            <input value={this.state.profile} name="profile" onChange={this.handleChange} type="text" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <h6>¿Cuáles crees que son tus cualidades a la hora de trabajar en equipo?</h6>
                                            <input value={this.state.qualities} name="qualities" onChange={this.handleChange} type="text" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <h6>¿Cuál ha sido tu mayor logro?</h6>
                                            <input value={this.state.achievement} name="achievement" onChange={this.handleChange} type="text" placeholder="" />
                                        </div>
                                    </div>
                                    <button  type="submit" className="btn light-blue darken-4">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Principal; 