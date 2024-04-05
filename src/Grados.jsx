/* import { useRef } from "react";

const Grados = () => {

    const inputRef = useRef()
    const resultRef = useRef()

    const covertion = () => {
        const grados = inputRef.current.value
        resultRef.current.innerHTML = (grados * 9 / 5) + 32
    }

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={covertion}>Calcular</button>
            <div ref={resultRef}></div>
        </div>
    )
}
 */

import { useRef, useState } from 'react'

const Grados = () => {
    const gradosRef = useRef()
    const [fahrenheit, setFahenheit] = useState()

    const convertion = () => {
        const grados = gradosRef.current.value
        const fahrenheitAux = grados * 9 / 5 + 32
        setFahenheit(fahrenheitAux)
    }

    return (
        <div>
            <input type="text" ref={gradosRef} />
            <button onClick={convertion}>Convertir</button>
            <div>{fahrenheit}</div>
        </div>
    )
}

export default Grados
