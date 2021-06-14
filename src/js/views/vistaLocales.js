import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => (
	<form className="container col-md-12">
		<div className="row featurette p-5">
			<div className="col-md-5 order-md-1">
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
					<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
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
				<div classNameName="form-group">
					<label htmlFor="exampleFormControlInput1">Website</label>
					<input
						type="text"
						className="form-control"
						id="exampleFormControlInput1"
						placeholder="www.tuweb.com"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="exampleFormControlInput1">Dirección de tu Local</label>
					<input
						type="text"
						className="form-control"
						id="exampleFormControlInput1"
						placeholder="Calle 1234, Localidad"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="exampleFormControlSelect1">Elegí tu departamento</label>
					<select className="form-control" id="exampleFormControlSelect1">
						<option>Artigas</option>
						<option>Canelones</option>
						<option>Cerro Largo</option>
						<option>Colonia</option>
						<option>Durazno</option>
						<option>Flores</option>
						<option>Florida</option>
						<option>Lavalleja</option>
						<option>Maldonado</option>
						<option>Montevideo</option>
						<option>Paysandú</option>
						<option>Río Negro</option>
						<option>Rivera</option>
						<option>Rocha</option>
						<option>Salto</option>
						<option>San José</option>
						<option>Soriano</option>
						<option>Tacuarembó</option>
						<option>Treinta y Tres</option>
					</select>
				</div>
			</div>
			<div className="col-md-7 order-md-2">
				<h4 className="text-center">Horarios</h4>
				<div className="row featurette">
					<div className="col-md-6 order-md-1">
						<h6 className="text-center mr-3 pt-3">Lunes</h6>
						<div className="row featurette justify-content-center">
							<div className="text-center">
								<label htmlFor="formControl">Apertura</label>
								<div className="row mx-2">
									<div className="form-group mx-2">
										<select className="form-control form-control-sm" id="exampleFormControlSelect1">
											<option>01</option>
											<option>02</option>
											<option>03</option>
											<option>04</option>
											<option>05</option>
											<option>06</option>
											<option>07</option>
											<option>08</option>
											<option>09</option>
											<option>10</option>
											<option>11</option>
											<option>12</option>
										</select>
									</div>
									<div className="form-group mx-2">
										<select className="form-control form-control-sm" id="exampleFormControlSelect1">
											<option>00</option>
											<option>10</option>
											<option>20</option>
											<option>30</option>
											<option>40</option>
											<option>50</option>
										</select>
									</div>
									<div className="form-group mx-2">
										<select className="form-control form-control-sm" id="exampleFormControlSelect1">
											<option>AM</option>
											<option>PM</option>
										</select>
									</div>
								</div>
							</div>
							<div className="text-center">
								<label htmlFor="formControl">Cierre</label>
								<div className="row mx-2">
									<div className="form-group mx-2">
										<select className="form-control form-control-sm" id="exampleFormControlSelect1">
											<option>01</option>
											<option>02</option>
											<option>03</option>
											<option>04</option>
											<option>05</option>
											<option>06</option>
											<option>07</option>
											<option>08</option>
											<option>09</option>
											<option>10</option>
											<option>11</option>
											<option>12</option>
										</select>
									</div>
									<div className="form-group mx-2">
										<select className="form-control form-control-sm" id="exampleFormControlSelect1">
											<option>00</option>
											<option>10</option>
											<option>20</option>
											<option>30</option>
											<option>40</option>
											<option>50</option>
										</select>
									</div>
									<div className="form-group mx-2">
										<select className="form-control form-control-sm" id="exampleFormControlSelect1">
											<option>AM</option>
											<option>PM</option>
										</select>
									</div>
								</div>
							</div>
						</div>
						<h6 className="text-center mr-3 pt-3">Martes</h6>
						<div className="row featurette justify-content-center">
							<div className="text-center">
								<label htmlFor="formControl">Apertura</label>
								<div className="row mx-2">
									<div className="form-group mx-2">
										<select className="form-control form-control-sm" id="exampleFormControlSelect1">
											<option>01</option>
											<option>02</option>
											<option>03</option>
											<option>04</option>
											<option>05</option>
											<option>06</option>
											<option>07</option>
											<option>08</option>
											<option>09</option>
											<option>10</option>
											<option>11</option>
											<option>12</option>
										</select>
									</div>
									<div className="form-group mx-2">
										<select className="form-control form-control-sm" id="exampleFormControlSelect1">
											<option>00</option>
											<option>10</option>
											<option>20</option>
											<option>30</option>
											<option>40</option>
											<option>50</option>
										</select>
									</div>
									<div className="form-group mx-2">
										<select className="form-control form-control-sm" id="exampleFormControlSelect1">
											<option>AM</option>
											<option>PM</option>
										</select>
									</div>
								</div>
							</div>
							<div className="text-center">
								<label htmlFor="formControl">Cierre</label>
								<div className="row mx-2">
									<div className="form-group mx-2">
										<select className="form-control form-control-sm" id="exampleFormControlSelect1">
											<option>01</option>
											<option>02</option>
											<option>03</option>
											<option>04</option>
											<option>05</option>
											<option>06</option>
											<option>07</option>
											<option>08</option>
											<option>09</option>
											<option>10</option>
											<option>11</option>
											<option>12</option>
										</select>
									</div>
									<div className="form-group mx-2">
										<select className="form-control form-control-sm" id="exampleFormControlSelect1">
											<option>00</option>
											<option>10</option>
											<option>20</option>
											<option>30</option>
											<option>40</option>
											<option>50</option>
										</select>
									</div>
									<div className="form-group mx-2">
										<select className="form-control form-control-sm" id="exampleFormControlSelect1">
											<option>AM</option>
											<option>PM</option>
										</select>
									</div>
								</div>
							</div>
						</div>
						<h6 className="text-center mr-3 pt-3">Miércoles</h6>
						<div className="row featurette justify-content-center">
							<div className="text-center">
								<label htmlFor="formControl">Apertura</label>
								<div className="row mx-2">
									<div className="form-group mx-2">
										<select className="form-control form-control-sm" id="exampleFormControlSelect1">
											<option>01</option>
											<option>02</option>
											<option>03</option>
											<option>04</option>
											<option>05</option>
											<option>06</option>
											<option>07</option>
											<option>08</option>
											<option>09</option>
											<option>10</option>
											<option>11</option>
											<option>12</option>
										</select>
									</div>
									<div className="form-group mx-2">
										<select className="form-control form-control-sm" id="exampleFormControlSelect1">
											<option>00</option>
											<option>10</option>
											<option>20</option>
											<option>30</option>
											<option>40</option>
											<option>50</option>
										</select>
									</div>
									<div className="form-group mx-2">
										<select className="form-control form-control-sm" id="exampleFormControlSelect1">
											<option>AM</option>
											<option>PM</option>
										</select>
									</div>
								</div>
							</div>
							<div className="text-center">
								<label htmlFor="formControl">Cierre</label>
								<div className="row mx-2">
									<div className="form-group mx-2">
										<select className="form-control form-control-sm" id="exampleFormControlSelect1">
											<option>01</option>
											<option>02</option>
											<option>03</option>
											<option>04</option>
											<option>05</option>
											<option>06</option>
											<option>07</option>
											<option>08</option>
											<option>09</option>
											<option>10</option>
											<option>11</option>
											<option>12</option>
										</select>
									</div>
									<div className="form-group mx-2">
										<select className="form-control form-control-sm" id="exampleFormControlSelect1">
											<option>00</option>
											<option>10</option>
											<option>20</option>
											<option>30</option>
											<option>40</option>
											<option>50</option>
										</select>
									</div>
									<div className="form-group mx-2">
										<select className="form-control form-control-sm" id="exampleFormControlSelect1">
											<option>AM</option>
											<option>PM</option>
										</select>
									</div>
								</div>
							</div>
						</div>
						<h6 className="text-center mr-3 pt-3">Jueves</h6>
						<div className="row featurette justify-content-center">
							<div className="text-center">
								<label htmlFor="formControl">Apertura</label>
								<div className="row mx-2">
									<div className="form-group mx-2">
										<select className="form-control form-control-sm" id="exampleFormControlSelect1">
											<option>01</option>
											<option>02</option>
											<option>03</option>
											<option>04</option>
											<option>05</option>
											<option>06</option>
											<option>07</option>
											<option>08</option>
											<option>09</option>
											<option>10</option>
											<option>11</option>
											<option>12</option>
										</select>
									</div>
									<div className="form-group mx-2">
										<select className="form-control form-control-sm" id="exampleFormControlSelect1">
											<option>00</option>
											<option>10</option>
											<option>20</option>
											<option>30</option>
											<option>40</option>
											<option>50</option>
										</select>
									</div>
									<div className="form-group mx-2">
										<select className="form-control form-control-sm" id="exampleFormControlSelect1">
											<option>AM</option>
											<option>PM</option>
										</select>
									</div>
								</div>
							</div>
							<div className="text-center">
								<label htmlFor="formControl">Cierre</label>
								<div className="row mx-2">
									<div className="form-group mx-2">
										<select className="form-control form-control-sm" id="exampleFormControlSelect1">
											<option>01</option>
											<option>02</option>
											<option>03</option>
											<option>04</option>
											<option>05</option>
											<option>06</option>
											<option>07</option>
											<option>08</option>
											<option>09</option>
											<option>10</option>
											<option>11</option>
											<option>12</option>
										</select>
									</div>
									<div className="form-group mx-2">
										<select className="form-control form-control-sm" id="exampleFormControlSelect1">
											<option>00</option>
											<option>10</option>
											<option>20</option>
											<option>30</option>
											<option>40</option>
											<option>50</option>
										</select>
									</div>
									<div className="form-group mx-2">
										<select className="form-control form-control-sm" id="exampleFormControlSelect1">
											<option>AM</option>
											<option>PM</option>
										</select>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-6 order-md-2">
						<h6 className="text-center mr-3 pt-3">Viernes</h6>
						<div className="row featurette justify-content-center">
							<div className="text-center">
								<label htmlFor="formControl">Apertura</label>
								<div className="row mx-2">
									<div className="form-group mx-2">
										<select className="form-control form-control-sm" id="exampleFormControlSelect1">
											<option>01</option>
											<option>02</option>
											<option>03</option>
											<option>04</option>
											<option>05</option>
											<option>06</option>
											<option>07</option>
											<option>08</option>
											<option>09</option>
											<option>10</option>
											<option>11</option>
											<option>12</option>
										</select>
									</div>
									<div className="form-group mx-2">
										<select className="form-control form-control-sm" id="exampleFormControlSelect1">
											<option>00</option>
											<option>10</option>
											<option>20</option>
											<option>30</option>
											<option>40</option>
											<option>50</option>
										</select>
									</div>
									<div className="form-group mx-2">
										<select className="form-control form-control-sm" id="exampleFormControlSelect1">
											<option>AM</option>
											<option>PM</option>
										</select>
									</div>
								</div>
							</div>
							<div className="text-center">
								<label htmlFor="formControl">Cierre</label>
								<div className="row mx-2">
									<div className="form-group mx-2">
										<select className="form-control form-control-sm" id="exampleFormControlSelect1">
											<option>01</option>
											<option>02</option>
											<option>03</option>
											<option>04</option>
											<option>05</option>
											<option>06</option>
											<option>07</option>
											<option>08</option>
											<option>09</option>
											<option>10</option>
											<option>11</option>
											<option>12</option>
										</select>
									</div>
									<div className="form-group mx-2">
										<select className="form-control form-control-sm" id="exampleFormControlSelect1">
											<option>00</option>
											<option>10</option>
											<option>20</option>
											<option>30</option>
											<option>40</option>
											<option>50</option>
										</select>
									</div>
									<div className="form-group mx-2">
										<select className="form-control form-control-sm" id="exampleFormControlSelect1">
											<option>AM</option>
											<option>PM</option>
										</select>
									</div>
								</div>
							</div>
						</div>
						<h6 className="text-center mr-3 pt-3">Sábado</h6>
						<div className="row featurette justify-content-center">
							<div className="text-center">
								<label htmlFor="formControl">Apertura</label>
								<div className="row mx-2">
									<div className="form-group mx-2">
										<select className="form-control form-control-sm" id="exampleFormControlSelect1">
											<option>01</option>
											<option>02</option>
											<option>03</option>
											<option>04</option>
											<option>05</option>
											<option>06</option>
											<option>07</option>
											<option>08</option>
											<option>09</option>
											<option>10</option>
											<option>11</option>
											<option>12</option>
										</select>
									</div>
									<div className="form-group mx-2">
										<select className="form-control form-control-sm" id="exampleFormControlSelect1">
											<option>00</option>
											<option>10</option>
											<option>20</option>
											<option>30</option>
											<option>40</option>
											<option>50</option>
										</select>
									</div>
									<div className="form-group mx-2">
										<select className="form-control form-control-sm" id="exampleFormControlSelect1">
											<option>AM</option>
											<option>PM</option>
										</select>
									</div>
								</div>
							</div>
							<div className="text-center">
								<label htmlFor="formControl">Cierre</label>
								<div className="row mx-2">
									<div className="form-group mx-2">
										<select className="form-control form-control-sm" id="exampleFormControlSelect1">
											<option>01</option>
											<option>02</option>
											<option>03</option>
											<option>04</option>
											<option>05</option>
											<option>06</option>
											<option>07</option>
											<option>08</option>
											<option>09</option>
											<option>10</option>
											<option>11</option>
											<option>12</option>
										</select>
									</div>
									<div className="form-group mx-2">
										<select className="form-control form-control-sm" id="exampleFormControlSelect1">
											<option>00</option>
											<option>10</option>
											<option>20</option>
											<option>30</option>
											<option>40</option>
											<option>50</option>
										</select>
									</div>
									<div className="form-group mx-2">
										<select className="form-control form-control-sm" id="exampleFormControlSelect1">
											<option>AM</option>
											<option>PM</option>
										</select>
									</div>
								</div>
							</div>
						</div>
						<h6 className="text-center mr-3 pt-3">Domingo</h6>
						<div className="row featurette justify-content-center">
							<div className="text-center">
								<label htmlFor="formControl">Apertura</label>
								<div className="row mx-2">
									<div className="form-group mx-2">
										<select className="form-control form-control-sm" id="exampleFormControlSelect1">
											<option>01</option>
											<option>02</option>
											<option>03</option>
											<option>04</option>
											<option>05</option>
											<option>06</option>
											<option>07</option>
											<option>08</option>
											<option>09</option>
											<option>10</option>
											<option>11</option>
											<option>12</option>
										</select>
									</div>
									<div className="form-group mx-2">
										<select className="form-control form-control-sm" id="exampleFormControlSelect1">
											<option>00</option>
											<option>10</option>
											<option>20</option>
											<option>30</option>
											<option>40</option>
											<option>50</option>
										</select>
									</div>
									<div className="form-group mx-2">
										<select className="form-control form-control-sm" id="exampleFormControlSelect1">
											<option>AM</option>
											<option>PM</option>
										</select>
									</div>
								</div>
							</div>
							<div className="text-center">
								<label htmlFor="formControl">Cierre</label>
								<div className="row mx-2">
									<div className="form-group mx-2">
										<select className="form-control form-control-sm" id="exampleFormControlSelect1">
											<option>01</option>
											<option>02</option>
											<option>03</option>
											<option>04</option>
											<option>05</option>
											<option>06</option>
											<option>07</option>
											<option>08</option>
											<option>09</option>
											<option>10</option>
											<option>11</option>
											<option>12</option>
										</select>
									</div>
									<div className="form-group mx-2">
										<select className="form-control form-control-sm" id="exampleFormControlSelect1">
											<option>00</option>
											<option>10</option>
											<option>20</option>
											<option>30</option>
											<option>40</option>
											<option>50</option>
										</select>
									</div>
									<div className="form-group mx-2">
										<select className="form-control form-control-sm" id="exampleFormControlSelect1">
											<option>AM</option>
											<option>PM</option>
										</select>
									</div>
								</div>
							</div>
						</div>
						<div className="container pt-5">
							<div className="form-group py-3">
								<label htmlFor="exampleFormControlFile1">Subí una foto mostrando tu negocio</label>
								<input type="file" className="form-control-file" id="exampleFormControlFile1" />
							</div>
							<div>
								<button type="button" className="btn btn-primary">
									Registrar mi negocio
								</button>
								<div className="custom-control custom-checkbox pt-3">
									<input type="checkbox" className="custom-control-input" id="customCheck1" />
									<label className="custom-control-label" htmlFor="customCheck1">
										Acepto los términos y condiciones
									</label>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</form>
);
