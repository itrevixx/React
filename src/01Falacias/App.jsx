import { useEffect, useState } from 'react';
import falacys from './assets/data/falacias';


const App = () => {
    const [falacy, setFalacy] = useState({});
    const [falacySample, setFalacySample] = useState({});
    const [falacy, setFalacy] = useState({});
    const [questionFalacy, setQuestionsFalacy] = useState({});

    useEffect(() => {
        chooseRandomFalacy()

    }, [])

    const chooseRandomFalacy = () => {
        const pos = Math.floor(Math.random() * falacys.samples.length);
        const f = falacys[pos]

        setFalacy(selectedFalacy);
    }

    return (
        <div>
            <h2>{falacyType.type}</h2>

        </div>
    )
}

export default App;