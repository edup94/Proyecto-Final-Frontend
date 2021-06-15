import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const User = () => (
	<div>
    {/*acá va el mapa sacar el div con el embed que está de ejemplo */}
		<div className="embed-responsive embed-responsive-4by3">
			<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13085.623441965236!2d-56.14771535!3d-34.92135685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2suy!4v1623734833654!5m2!1ses-419!2suy" />
		</div>
		<div className="row featurette p-5 justify-content-center">
			<div className="col-md-4 order-md-1">
				<img src={rigoImage} className="rounded-circle img-fluid mb-2 shadow" />
				<h1 className="mb-4">Rigoberto 4Geeks</h1>
			</div>
			<div className="col-md-3 order-md-2">
				<div className="mx-3">
					<h4>Nombre</h4>
					<h5 className="mt-3">Rigoberto</h5>
					<h4 className="mt-4">Apellido</h4>
					<h5 className="mt-3">4Geeks</h5>
				</div>
			</div>
			<div className="col-md-3 order-md-3">
				<div className="mx-3">
					<h4>Nombre de usuario</h4>
					<h5 className="mt-3">Rigo</h5>
					<h4 className="mt-4">Lugar de Residencia</h4>
					<h5 className="mt-3">Kuala Lumpur, Malasia</h5>
				</div>
				<button type="button" className="btn btn-primary mt-4 mx-3">
					Editar
				</button>
			</div>
		</div>
	</div>
);
