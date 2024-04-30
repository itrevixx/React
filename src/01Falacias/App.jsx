import { useEffect, useState } from "react"
import { getRandom } from './app/utils'
import falacies from './assets/data/falacias.json'

const App = () => {

    const [falacy, setFalacy] = useState('');
    const [falacySample, setFalacySample] = useState('');
    const [questionFalacy, setQuestionFalacy] = useState('');

    const chooseRandomFalacy = () => {
        const i = Math.floor(Math.random() * falacies.length)
        const randomFalacy = falacies[i]
        setFalacy(randomFalacy)

        const fs = randomFalacy.samples[Math.floor(Math.random() * randomFalacy.samples.length)]
        setFalacySample(fs)
        const samples = getRandom(falacies, 2)
        samples.push(randomFalacy);
    }

    useEffect(() => {
        chooseRandomFalacy();
    }, [])

    return (
        <div>
            <p>{falacy.samples}</p>
            <p><button>X</button>{falacy.type}<button>Mostrar pista</button></p>
        </div>
    )
}

export default App

