import { useState } from "react"


const App = () => {
    const [dollars1, setDollars1] = useState(0);
    const [farenheit, setFarenheit] = useState(0);
    const [dollars2, setDollars2] = useState(0);
    const [farenheit2, setFarenheit2] = useState(0);
    const [result1, setResult1] = useState();
    const [result2, setResult2] = useState();
    const [currentImg, setCurrentImg] = useState();

    const ANIMAL_IMAGES = {
        img1: "http://via.placeholder.com/111x111",
        img2: "http://via.placeholder.com/222x222",
        img3: "http://via.placeholder.com/333x333",
    };

    return (
        <div>
            <div>
                <h3>Método sin botón</h3>
                <input type="text" placeholder="euros" onChange={(e) => setDollars1(e.target.value)} />
                <input type="text" placeholder="grados" onChange={(e) => setFarenheit(e.target.value)} />
                <p>Dollars:{dollars1 * 2}</p><p>Farenheit:{(farenheit * 9 / 5) + 32}</p>
            </div>
            <div>
                <h3>Método con botón</h3>
                <input type="text" placeholder="euros" onChange={(e) => setDollars2(e.target.value)} />
                <button onClick={() => setResult1(dollars2 * 2)}>Validar</button>
                <input type="text" placeholder="grados" onChange={(e) => setFarenheit2(e.target.value)} />
                <button onClick={() => setResult2((farenheit2 * 9 / 5) + 32)}>Validar</button>
                <p>Dollars:{result1}</p><p>Farenheit:{result2}</p>
            </div>
            <div>
                <h3>Cambiar Imagen</h3>
                <button onClick={() => setCurrentImg(ANIMAL_IMAGES.img1)}>IMG1</button>
                <button onClick={() => setCurrentImg(ANIMAL_IMAGES.img2)}>IMG2</button>
                <button onClick={() => setCurrentImg(ANIMAL_IMAGES.img3)}>IMG3</button><br />
                <img src={currentImg} />
            </div>
        </div>
    )
}

export default App

