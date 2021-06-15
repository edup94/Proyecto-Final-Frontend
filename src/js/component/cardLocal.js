import React from "react";
import Local from "../../img/interior-shot-of-cafe.jpg";
import "../../styles/home.scss";

export const CardLocal = () => (
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

					<h2 className="nombre-local p-3">Un local normal</h2>
				</div>
				<p className="local-bajada">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis ipsum id consequat
					convallis. Duis eget nulla malesuada, scelerisque ex sit amet, viverra diam. Nunc sagittis ornare
					justo eget pretium. Duis id malesuada odio. Pellentesque massa velit, finibus ac lorem a, porttitor
					fermentum augue. Maecenas vitae eros eu quam faucibus rhoncus vel vitae mi. Maecenas leo ipsum,
					imperdiet at tortor eu, consectetur suscipit est. Integer lacinia aliquet eros, non rutrum nibh
					tristique a. Phasellus arcu lorem, efficitur hendrerit diam non, rhoncus maximus ipsum. Etiam eu
					blandit odio, at volutpat nulla. Nullam ornare viverra tortor, nec vestibulum neque. Nulla facilisi.
					Donec eleifend nibh purus, eget porttitor lectus vulputate quis. Quisque nec blandit tortor. Donec
					ac mauris id quam molestie convallis vel non ipsum.
				</p>
				<div className="row">
					<div className="col-md-4">
						<p3>
							<h5>Horarios</h5>
							<div>lunes - viernes</div> <div>8:00 - 22:00</div> <div>sábados</div>{" "}
							<div>9:00 - 13:00</div>
						</p3>
					</div>
					<div className="col-md-4">
						<p3>
							<h5>Contacto</h5>
							<div>2481 9966</div> <div>www.coso.com.uy</div>
						</p3>
					</div>
					<div className="col-md-4">
						<p3>
							<h5>Dirección</h5>
							<div>Av. Siempre viva 123</div> <div>Salto, Uruguay</div>
						</p3>
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
		<div className="col-md-12 p-5">
			{/*acá va el mapa sacar el div con el embed que está de ejemplo */}
		<div className="embed-responsive embed-responsive-4by3">
			<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13085.623441965236!2d-56.14771535!3d-34.92135685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2suy!4v1623734833654!5m2!1ses-419!2suy" />
		</div>
		</div>
	</div>
);
