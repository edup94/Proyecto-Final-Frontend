import React from "react";
import Swal from 'sweetalert2'

export const ingreseMail = () => {
    swal ({
        text:"Por favor ingrese un mail",
        icon:"info",
        timer:"3000"
    });
}