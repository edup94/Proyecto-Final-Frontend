import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export function Favorites() {
	const { store, actions } = useContext(Context);

	return (
		<div className="container justify-content-between d-flex mb-4">
			{store.favorites.map((favorite, index) => {
				return (
					<div key={index} className="mr-5">
						<div className="card text bg-light m-2" style={{ width: "400px" }}>
							<img src={""} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Un nombre cool</h5>
								<p className="card-text">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
								</p>
								<div className="d-flex justify-content-between align-items-center">
									<Link to={"/details-favorites/" + index}>
										<span className="btn" style={{ backgroundColor: "#5DDC22" }}>
											Conocer más
										</span>
									</Link>
									<button type="button" className="btn btn-outline-warning">
										<i className="fas fa-star" />
									</button>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}