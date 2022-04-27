import React from 'react'

const Formulario = () => {
    return (
        <div>
                    <form className='formulario'>
                <label htmlFor="nombre">Nombre: </label>
                <input type="text" id='nombre' />
                <label htmlFor="apellido">Apellido: </label>
                <input type="text" id='apellido' />
                <label htmlFor="telefono">Telefono: </label>
                <input type="text" id='telefono' />
                <label htmlFor="mail">E-mail: </label>
                <input type="mail" id='mail' />

                <input type="submit" value="Enviar formulario" />
            </form>
        </div>
    )
}

export default Formulario