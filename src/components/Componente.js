import React from 'react'
import { useState } from 'react'

const Componente = () => {


    const [cont, setCont] = useState(0)

    const sumar = () => {
        setCont(cont + 1);
    }

    const restar = () => {
        setCont(cont - 1)
    }

    return (

        <div >

            <h1 className='titulo'>Formulario basico</h1>

            <p className='parrafo'>Complete el siguiente formulario</p>

            <div className='contador-gral'>
                <button onClick={restar}>Disminuir el valor!</button>
                <p className='contador'>El valor del contador es: {cont}</p>
                <button onClick={sumar}>Aumentar el valor!</button>
            </div>
        </div>
    )
}

export default Componente