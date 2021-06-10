import React from "react";
import Swal from 'sweetalert2'

export const mailExist = () => {
    swal ({
        text:"Ya existe un usuario con este mail",
        icon:"warning",
        timer:"3000"
    });
}