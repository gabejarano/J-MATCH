import React, { Component } from 'react';
class Proyecto extends Component{

    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col s5">
                            <div className="row">
                                            <div className="input-field col s12">
												<h2>Grupos de desarrollo</h2>
                                            </div>
                                        </div>
                            </div>
                        <div className="col s7">
                            <div className="card">
                                <div className="card-content">
                                    <form >
										<div className="row">
                                            <div className="input-field col s8">
												Grupo de PMC<br/>
                                            </div>
                                            <div className="input-field col s4">
                                            <button type="submit" className="btn light-blue darken-4">
                                            Unirse
                                            </button>
                                            </div>
                                        </div>
										<div className="row">
                                            <div className="input-field col s8">
												Los Kpas<br/>
                                            </div>
                                            <div className="input-field col s4">
                                            <button type="submit" className="btn light-blue darken-4">
                                            Unirse
                                            </button>
                                            </div>
                                        </div>
										<div className="row">
                                            <div className="input-field col s8">
												Grupo desarrollo web empresa<br/>
                                            </div>
                                            <div className="input-field col s4">
                                            <button type="submit" className="btn light-blue darken-4">
                                            Unirse
                                            </button>
                                            </div>
                                        </div>
										<div className="row">
                                            <div className="input-field col s8">
												Los mejores<br/>
                                            </div>
                                            <div className="input-field col s4">
                                            <button type="submit" className="btn light-blue darken-4">
                                            Unirse
                                            </button>
                                            </div>
                                        </div>
                                        
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

        )}; 
}
export default Proyecto; 