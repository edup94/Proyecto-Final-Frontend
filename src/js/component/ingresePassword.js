import React from "react";
import Swal from 'sweetalert2'

export const pingresePassword = () => {
    swal ({
        text:"Por favor ingrese una contrasena",
        icon:"info",
        timer:"3000"
    });
}