import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import logo from "../../img/logotipo60px.png";

export const Footer = () => {
	return (
		<div className="container-footer m-5 pt-2">
			<div className="row justify-content-md-center text-center">
				<div className="col d-flex justify-content-center">
					<Link to="/login">
						<h4 className="card-text font-weight-bolder">CONOCENOS</h4>
					</Link>
				</div>
				<div className="col d-flex justify-content-center">
					<Link to="/login">
						<h4 className="card-text font-weight-bolder">UNITE</h4>
					</Link>
				</div>
				<div className="col col-md-auto">
					<a href="" className="generic-anchor footer-list-anchor">
						<img src={logo} className="card-img-top" alt="..." />
					</a>
				</div>
				<div className="col d-flex justify-content-center">
					<Link to="/login">
						<h4 className="card-text font-weight-bolder">LOCALES</h4>
					</Link>
				</div>
				<div className="col d-flex justify-content-center">
					<Link to="/login">
						<h4 className="card-text font-weight-bolder">EVENTOS</h4>
					</Link>
				</div>
			</div>

			{/* Iconos redes */}
			<div className="social-media-icons text-center">
				<div className="row d-flex justify-content-center flex-wrap">
					<div className="col col-sm-auto">
						<a
							href="https://www.facebook.com/profile.php?id=100068864116110"
							className="generic-anchor"
							title="Facebook">
							<i className="fab fa-facebook fa-3x fa-lg" />
						</a>
					</div>
					<div className="col col-sm-auto">
						<a href="https://twitter.com/@enBICIando" className="generic-anchor" title="Twitter">
							<i className="fab fa-twitter fa-3x fa-lg" />
						</a>
					</div>
					<div className="col col-sm-auto">
						<a href="http://instagram.com/@enbici.ando" className="generic-anchor" title="Instagram">
							<i className="fab fa-instagram fa-3x fa-lg" />
						</a>
					</div>
					<div className="col col-sm-auto">
						<a
							href="https://www.youtube.com/channel/UCnRRSvCIP56EOj7JAyfsJrw"
							className="generic-anchor"
							title="Youtube">
							<i className="fab fa-youtube fa-3x fa-lg" />
						</a>
					</div>
					<div className="col col-sm-auto">
						<a
							href="https://www.pinterest.com/@enbiciando9302/"
							className="generic-anchor"
							title="Pinterest">
							<i className="fab fa-pinterest fa-3x fa-lg " />
						</a>
					</div>
				</div>
			</div>
			<div className="term-conditions-container">
				<div className="text-center font-weight-light">
					Todos los derechos reservados
					<i className="fa fa-copyright m-1" role="copyright" />
					<p>enBICIando, Uruguay, 2021</p>
					<div className="d-flex justify-content-center">
						<div className="col-2">
							<div className="d-flex justify-content-between">
								<Link to="/login">
									<h6 className="card-text">Términos</h6>
								</Link>
								<p> | </p>
								<Link to="/login">
									<h6 className="card-text">Privacidad</h6>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
