import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const EditarLocales = () => (
    <form className="container col-5 mx-auto">
        <div>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Nombre de Local</label>
                <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Nombre de tu negocio"
                />
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Describí brevemente tu negocio</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="7" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">
                    Email (no lo publicaremos, es para contactarte en caso de que pierdas el acceso a tu cuenta)
				</label>
                <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="tuemail@ejemplo.com"
                />
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Teléfono</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="2456 7890" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Dirección de tu Local</label>
                <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Calle 1234, Localidad, Departamento"
                />
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Horarios</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="7" />
            </div>

            <div className="container">
                <div className="form-group py-3">
                    <label htmlFor="exampleFormControlFile1">Subí una foto mostrando tu negocio</label>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                </div>
                <div>
                    <button type="button" className="btn btn-primary">
                        Guardar Cambios
					</button>
                </div>
            </div>
        </div>
    </form>
);
