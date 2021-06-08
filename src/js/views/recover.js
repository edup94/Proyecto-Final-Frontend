import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Recover = () => {
	const { store, actions } = useContext(Context);

	const handlerClick = e => {
		e.PreventDefault();
	};

	return (
		<div className="container">
			<div className="title.recover p-3 mb-2 bg-white text-dark">
				<p
					className="text-center font-weight-bolder 
                padding 1rem$spacer.mr-3margin-right: 1rem.mr-md-3margin-right: 1remmd">
					<h2>Restablece tu contraseña</h2>
					<h3>Te enviaremos un email para que vuelvas a tener acceso a tu cuenta</h3>
				</p>
			</div>
			<div className="container login d-flex justify-content-center">
				<form onSubmit={handlerClick} className="col-10">
					<div className="form-group row">
						<input
							onChange={actions.loginData}
							name="email"
							type="email"
							placeholder="Email"
							className="form-control"
							aria-describedby="emailHelp"
						/>
					</div>
					<div className="d-flex justify-content-center">
						<button
							type="reset"
							value="Reset"
							className="btn btn-sucess"
							// onClick={() => {actions.login()}}
						>
							{" "}
							Restablecer
							{/* Login {store.loggedIn == true ? <Redirect to="/" /> : ""} */}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
