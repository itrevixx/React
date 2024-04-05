/* import { useRef } from "react"

const Superficie = () => {

    const resultRef = useRef()
    const alturaRef = useRef()
    const baseRef = useRef()

    const calculate = () => {
        const altura = alturaRef.current.value
        const base = baseRef.current.value
        const result = base * altura
        resultRef.current.innerHTML = result
    }

    return (
        <div>
            <input type="text" ref={alturaRef} />
            <input type="text" ref={baseRef} />
            <button onClick={calculate}>Calcular</button>
            <div ref={resultRef}></div>
        </div>
    )
}

export default Superficie
 */

import { useState } from "react"

const Superficie = () => {

    const [base, setBase] = useState('');
    const [altura, setAltura] = useState('');
    const [valorAMostrar, setValorAMostrar] = useState(0);

    return (
        <div className="App">
            <input type="text" onChange={e => setBase(e.target.value)} />
            <input type="text" onChange={e => setAltura(e.target.value)} />
            <button onClick={() => setValorAMostrar(altura * base)}>Cambiar valor</button>
            <div>{valorAMostrar}</div>
        </div>
    );
}

export default Superficie
