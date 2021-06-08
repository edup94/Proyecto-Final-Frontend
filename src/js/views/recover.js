import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Recover = () => {
	const { store, actions } = useContext(Context);

	const handlerClick = e => {
		e.PreventDefault();
	};

	return (
		<div className="container">
			<div className="title.recover p-3 mb-2 bg-white text-dark">
				<div
					className="text-center font-weight-bolder 
                padding 1rem$spacer.mr-3margin-right: 1rem.mr-md-3margin-right: 1remmd">
					<h2>Restablece tu contraseña</h2>
					<h3>Te enviaremos un email para que vuelvas a tener acceso a tu cuenta</h3>
				</div>
			</div>
			<div className="container login d-flex justify-content-center">
				<form onSubmit={handlerClick} className="col-10">
					<div className="form-group row">
						<input
							// onChange={actions.loginData}
							name="email"
							type="email"
							placeholder="Email"
							className="form-control"
							aria-describedby="emailHelp"
						/>
					</div>
					<div className="d-flex justify-content-center">
						<div className="d-flex justify-content-center">
							<Link to="/login" className="btn btn-dark btn-outline-light">
								<h5 className="card-text">Recuperar</h5>
							</Link>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};
