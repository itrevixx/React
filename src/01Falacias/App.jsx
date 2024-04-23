import { useEffect, useState } from 'react';
import falacys from './assets/data/falacias';


const App = () => {
    const [falacyType, setFalacyType] = useState({});
    const [falacySample, setFalacySample] = useState({});
    const [falacy, setFalacy] = useState({});
    const [questionFalacy, setQuestionsFalacy] = useState({});

    useEffect(() => {
        chooseRandomFalacy()

    }, [])

    const chooseRandomFalacy = () => {
        const i = Math.floor(Math.random() * falacys.length);
        const selectedFalacy = falacys[i];
        setFalacyType(selectedFalacy);

        const j = Math.floor(Math.random() * selectedFalacy.samples.length);
        const selectedFalacySample = selectedFalacy.samples[j];
        setFalacySample(selectedFalacySample);

        setFalacy(selectedFalacy);


    }

    return (
        <div>
            <h2>{falacyType.type}</h2>

        </div>
    )
}

export default App;