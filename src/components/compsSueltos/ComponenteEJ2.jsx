import { useState } from "react"

const ComponenteEJ2 = ({ sendVal }) => {
    const [val, setVal] = useState(0);

    const updateVal = (v) => {
        setVal(v)
        sendVal(v)
    }
    return (
        <div>
            <button onClick={() => updateVal(val - 1)}>-</button>
            <input type="text" value={val} onChange={e => updateVal(Number(e.target.value))} />
            <button onClick={() => updateVal(val + 1)}>+</button>
        </div >
    )
}

export default ComponenteEJ2
