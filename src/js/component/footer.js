import React, { Component } from "react";
import "../../styles/home.scss";

export const Footer = () => {
	return (
		<div className="container-footer">
			<div className="row justify-content-md-center text-center">
				<div className="col">
					<a href="" className="generic-anchor footer-list-anchor">
						CONOCENOS
					</a>
				</div>
				<div className="col">
					<a href="" className="generic-anchor footer-list-anchor">
						UNETE A NOSOTROS
					</a>
				</div>

				<div className="col col-md-auto">
					<a href="" className="generic-anchor footer-list-anchor">
						<img src="..." className="card-img-top" alt="..." />
					</a>
				</div>

				<div className="col">
					<a href="" className="generic-anchor footer-list-anchor">
						LOCALES
					</a>
				</div>

				<div className="col">
					<a href="" className="generic-anchor footer-list-anchor">
						EVENTOS
					</a>
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

			{/*Terminos y condiciones*/}
			<div className="term-conditions-container">
				<p className="text-center font-weight-light">
					<i className="fa fa-copyright" role="copyright" /> 2021 enBICIando de Uruguay
					<p>Todos los derechos reservados</p>
					<p>
						<a href="" className="generic-anchor" rel="nofollow">
							Terminos
						</a>{" "}
						|{" "}
						<a href="/privacy-policy.html" className="generic-anchor" rel="nofollow">
							Privacidad
						</a>
					</p>
				</p>
			</div>
		</div>
	);
};
