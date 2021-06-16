import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export function Comentario(props) {
	const { store, actions } = useContext(Context);

	const [input, setInput] = useState("");

	const idOnSubmit = e => {
		e.preventDefault();

		props.onSubmit({
			label: input,
			done: false
		});
		setInput("");
	};
	const onChangeInput = e => {
		setInput(e.target.value);
	};

	return (
		<div className="container justify-content-center d-flex">
			<div className="card text bg-light">
				<div className="card-body">
					<h5 className="card-title">{props.username}</h5>
					<p className="card-text">{props.comentario}</p>
				</div>
			</div>
			<div className="container">
				<form onSubmit={idOnSubmit}>
					<div className="row justify-content-center">
						<div className="col-4 bg-white top">
							<input
								type="text"
								className="form-control mb-2"
								id="inlineFormInput"
								placeholder="Ingrese Tarea"
								onChange={onChangeInput}
								value={input}
							/>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
Comentario.propTypes = {
	username: PropTypes.string,
	comentario: PropTypes.string,
	idOnSubmit: PropTypes.func,
	onSubmit: PropTypes.func
};
