import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { LocalSingleCard } from "../component/localCard";
import { Comment } from "../component/comentarioCard";

export const LocalSolo = () => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();

	return (
		<div className="container mt-5">
			<div className="row justify-content-around">
				{store.localData.map((element, i) => {
					return (
						<LocalSingleCard
							key={i}
							nombre={element.nombre}
							descripcion={element.descripcion}
							horario={element.horario}
							direccion={element.direccion}
							telefono={element.telefono}
						/>
					);
				})}
			</div>
			<div className="row justify-content-around">
				{!store.comments ? (
					<p>Cargando...</p>
				) : store.comments.length > 0 ? (
					store.comments.map((element, i) => {
						return <Comment key={i} username={element.username} comentario={element.comentario} />;
					})
				) : (
					<p>No hay comentarios aún.</p>
				)}
			</div>
		</div>
	);
};
