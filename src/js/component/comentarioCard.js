import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export function Comentario() {
    const { store, actions } = useContext(Context);

    return (
        <div className="container justify-content-center d-flex">
            <div className="card text bg-light">
                <div className="card-body">
                    <h5 className="card-title">{props.username}</h5>
                    <p className="card-text">
                        {props.comentario}
                    </p>
                    <div className="d-flex justify-content-end">
                        <Link className="btn btn-primary">
                            Comentar
						</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}