import React from "react";
import Local from "../../img/interior-shot-of-cafe.jpg";
import PropTypes from "prop-types"

export const LocalSingleCard = (props) => {

    return (
        <div className="container col-md-12">
            <div className="row featurette p-5">
                <div className="col-md-6 order-md-1">
                    <img src={Local} style={{ width: "95%" }} />
                </div>
                <div className="col-md-6 order-md-2">
                    <div className="row align-items-center p-3">
                        <h2 className="nombre-local p-3">{props.nombre}</h2>
                    </div>
                    <p className="local-bajada">
                        Descripción: {props.descripcion}
                    </p>
                    <div className="row">
                        <div className="col-md-4">
                            Horario: <h5>{props.horario}</h5>
                        </div>
                        <div className="col-md-4">
                            Teléfono: <h5>{props.telefono}</h5>
                        </div>
                        <div className="col-md-4">
                            Dirección: <h5>{props.direccion}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

LocalSingleCard.propTypes = {
    nombre: PropTypes.string,
    horario: PropTypes.string,
    direccion: PropTypes.string,
    descripcion: PropTypes.string,
    telefono: PropTypes.string
};