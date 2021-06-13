import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Recover = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container login recover d-flex justify-content-end">
			<div className="fondo bg-white col-6 shadow p-4 mb-4 m-5">
				<div className="title.recover p-3 text-primary mt-5">
					<div
						className="text-center font-weight-bolder 
                padding 1rem$spacer.mr-3margin-right: 1rem.mr-md-3margin-right: 1remmd">
						<h3>Restablece tu contraseña</h3>
						<h5>Te enviaremos un email para que vuelvas a tener acceso a tu cuenta</h5>
					</div>
				</div>
				<div className="container d-flex justify-content-center">
					<form className="col-6">
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
							<div className="d-flex justify-content-center">
								<Link to="/login" className="btn btn-primary mb-5">
									<h5 className="card-text">Restablecer</h5>
								</Link>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
