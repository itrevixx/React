import { useState } from "react"

const ANIMAL_IMAGES = {
    img1: "http://via.placeholder.com/111x111",
    img2: "http://via.placeholder.com/222x222",
    img3: "http://via.placeholder.com/333x333",
};
const Images = () => {

    const [img, setImg] = useState(0);

    return (
        <div>
            <button onClick={() => setImg("img1")}>Img1</button>
            <button onClick={() => setImg("img2")}>Img2</button>
            <button onClick={() => setImg("img3")}>Img3</button><br /><br />
            <img src={ANIMAL_IMAGES[img]} />
        </div>
    );

}

export default Images