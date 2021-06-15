import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { LocalCard } from "../component/localCard";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();

	return (
		<div className="container mt-5">
			<h2 className="d-flex justify-content-center">Locales</h2>
			<div className="row justify-content-around">
				{store.localInfo.map((element, i) => {
					return (
						<LocalCard
							key={i}
							name={element.name}
							descripcion={element.descripcion}
							horario={element.horario}
							direccion={element.direccion}
							telefono={element.telefono}
						/>
					);
				})}
			</div>
		</div>
	);
};
