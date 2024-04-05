/* import { useRef } from "react"

const Dolares = () => {

    const inputRef = useRef()
    const resultadoRef = useRef()

    const convertion = () => {
        const euro = inputRef.current.value
        resultadoRef.current.innerHTML = euro * 2;
    }

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={convertion}>Convertir</button>
            <div ref={resultadoRef}></div>
        </div>
    )
}
 */
import { useRef, useState } from "react"

const Dolares = () => {
    const eurosRef = useRef()
    const [dollars, setDolars] = useState(0)

    const convertion = () => {
        const euros = eurosRef.current.value
        const dollarsAux = euros * 2
        setDolars(dollarsAux)

    }
    return (
        <div>
            <input type="text" ref={eurosRef} />
            <button onClick={convertion}>Convertir</button>
            <div>{dollars}</div>
        </div>
    )

}
export default Dolares

//rafce 