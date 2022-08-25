import React from "react";
import User from '../../Style/Imagenes/User.jpg'
import './UserPop.css'

import { Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap'

export default function Pop({ show, user }) {

    function handleClick(e) {
        // e.preventDefault()
        window.open("http://localhost:3001/auth/google", "_self")

    }


    return (
        <Modal isOpen={user} className="UserPop">
            <ModalHeader>
                <img src={User} alt="User" />
                Bienvenido
            </ModalHeader>
            <ModalBody>
                <FormGroup>
                    <Label>Usuario</Label>
                    <Input type="text" id="Usuario"></Input>
                </FormGroup>
                <FormGroup>
                    <Label>Contraseña</Label>
                    <Input type="password" id="Pass"></Input>
                </FormGroup>
            </ModalBody>
            <ModalFooter>
                <button onClick={() => show()}>X</button>
                <button>Iniciar sesion</button>
                <button onClick={(e) => handleClick(e)}>Ingresar con cuenta de Google</button>

            </ModalFooter>
        </Modal>
    )
}