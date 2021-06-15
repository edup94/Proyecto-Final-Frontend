import React from "react";
import Local from "../../img/interior-shot-of-cafe.jpg";
import "../../styles/home.scss";
import PropTypes from "prop-types";

export const LocalCard = props => (
	<div className="container col-md-12">
		<div className="row featurette p-5">
			<div className="col-md-6 order-md-1">
				<img src={Local} style={{ width: "95%" }} />
			</div>
			<div className="col-md-6 order-md-2">
				<div className="row align-items-center p-3">
					<button type="button" style={{ height: "44px" }} className="btn btn-outline-warning">
						<i className="fas fa-star" />
					</button>
					<h2 className="nombre-local p-3">{props.nombre}</h2>
				</div>
				<p className="local-bajada">Descripcion: {props.descripcion}</p>
				<div className="row">
					<div className="col-md-4">
						<p>{props.horario}</p>
					</div>
					<div className="col-md-4">
						<p>{props.telefono}</p>
					</div>
					<div className="col-md-4">
						<p>{props.direccion}</p>
					</div>
				</div>
				<div className="comentarios pt-3">
					<div className="comment">
						<p>
							<strong>Claringa</strong>
							<div>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis ipsum id
								consequat convallis. Duis eget nulla malesuada, scelerisque ex sit amet, viverra diam.
								Nunc sagittis ornare justo eget pretium. Duis id malesuada odio. Pellentesque massa
								velit, finibus ac lorem a, porttitor fermentum augue. Maecenas vitae eros eu quam
								faucibus rhoncus vel vitae mi. Maecenas leo ipsum, imperdiet at tortor eu, consectetur
								suscipit est. Integer lacinia aliquet eros, non rutrum nibh tristique a.
							</div>
						</p>
					</div>
					<div className="comment">
						<p>
							<strong>Edward Walls</strong>
							<div>
								Phasellus arcu lorem, efficitur hendrerit diam non, rhoncus maximus ipsum. Etiam eu
								blandit odio, at volutpat nulla. Nullam ornare viverra tortor, nec vestibulum neque.
								Nulla facilisi. Donec eleifend nibh purus, eget porttitor lectus vulputate quis. Quisque
								nec blandit tortor. Donec ac mauris id quam molestie convallis vel non ipsum.
							</div>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
);

LocalCard.propTypes = {
	nombre: PropTypes.string,
	horario: PropTypes.string,
	direccion: PropTypes.string,
	descripcion: PropTypes.string,
	telefono: PropTypes.string
};
