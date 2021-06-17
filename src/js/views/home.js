import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { LocalCard } from "../component/localCard";
import { Comentario } from "../component/comentarioCard";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();

	useEffect(() => {
		actions.getLocales();
    }, []);

	return (
		<div className="container mt-5">
			<h2 className="d-flex justify-content-center text-primary">Locales</h2>
			<div className="row justify-content-around">
				{store.localData.map((element, i) => {
					return (
						<LocalCard
							key={i}
							nombre={element.nombre}
							descripcion={element.descripcion}
							horario={element.horario}
							direccion={element.direccion}
							telefono={element.telefono}
							id={element.id}
						/>
					);
				})}
			</div>
			{store.comments.map((element, i) => {
				return <Comentario key={i} comentario={element.comentario} />;
			})}
		</div>
	);
};
