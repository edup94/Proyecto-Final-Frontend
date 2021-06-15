import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../../styles/home.scss";
import carrusel1 from "../../img/carrusel1.jpg";
import carrusel2 from "../../img/carrusel2.jpg";
import carrusel3 from "../../img/carrusel3.jpg";
import arreglo from "../../img/arregloBici.png";
import caminos from "../../img/caminos.png";
import bicifriendly from "../../img/bicifriendly.png";
import notificaciones from "../../img/notificaciones.png";
import { Link } from "react-router-dom";

export const Landing = () => {
	return (
		<div>
			<Carousel fade>
				<Carousel.Item>
					<img className="d-block w-100" src={carrusel1} alt="Salvando al mundo una pedaleada a la vez" />
					<Carousel.Caption>
						<h2 className="pb-3 d-none d-sm-none d-md-block" style={{ textShadow: "3px 3px #000000" }}>
							Salvando al mundo una pedaleada a la vez
						</h2>
						<Link to="/login" className="btn btn-primary mb-5">
							Unite
						</Link>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={carrusel3}
						alt="Registrate y empezá a descubrir lugares bici-friendly"
					/>

					<Carousel.Caption>
						<h2 className="pb-3 d-none d-sm-none d-md-block" style={{ textShadow: "3px 3px #000000" }}>
							Registrate y empezá a descubrir lugares bici-friendly
						</h2>
						<Link to="/login" className="btn btn-primary mb-5">
							Unite
						</Link>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={carrusel2} alt="Enterate de todos los eventos" />
					<Carousel.Caption>
						<h2 className="pb-3 d-none d-sm-none d-md-block" style={{ textShadow: "3px 3px #000000" }}>
							Enterate de todos los eventos
						</h2>
						<Link to="/login" className="btn btn-primary mb-5">
							Unite
						</Link>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
			<div className="flex pt-5">
				<div className="text-center">
					<h2 className="text-center">Conectate y empezá a disfrutar</h2>
				</div>
				<div className="row featurette p-5">
					<div className="col-md-6 mb-3">
						<div className="row no-gutters">
							<div className="col-md-3 mr-5">
								<img src={caminos} />
							</div>
							<div className="col-md-8 mt-3">
								<div className="card-body">
									<h5 className="card-title">Descubrí caminos</h5>
									<p className="card-text">
										En cualquier rincón del país podrás acceder a las rutas más interesantes para
										vos, desde paseos hasta bici sendas y por que no, hacer tu propia ruta.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 mb-3">
						<div className="row no-gutters">
							<div className="col-md-3 mr-5">
								<img src={bicifriendly} />
							</div>
							<div className="col-md-8 mt-3">
								<div className="card-body">
									<h5 className="card-title">Encontrá locales Bici-friendly</h5>
									<p className="card-text">
										La guía más completa para que puedas ir con tu bici a todos lados.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 mb-3">
						<div className="row no-gutters">
							<div className="col-md-3 mr-5">
								<img src={arreglo} />
							</div>
							<div className="col-md-8 mt-3">
								<div className="card-body">
									<h5 className="card-title">Repará tu bici</h5>
									<p className="card-text">
										¿Pinchaste la bici y no sabes dónde repararla? Donde te estés, encontrarás
										talleres con las mejores calificaciones para solucionar tu problema.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 mb-3">
						<div className="row no-gutters">
							<div className="col-md-3 mr-5">
								<img src={notificaciones} />
							</div>
							<div className="col-md-8 mt-3">
								<div className="card-body">
									<h5 className="card-title">Enterate de lo que está pasando</h5>
									<p className="card-text">
										Calendario de eventos nacionales e internacionales a solo un click.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
