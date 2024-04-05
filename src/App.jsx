/* import { useRef } from "react";

const App = () => {
  const inputRef = useRef(null);

  const hacerCosas = () => {
    const v = inputRef.current.value;
    alert(v)
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={hacerCosas}>Hacer cosas</button>
    </div>
  );
}

export default App */
//-------------------------------------------------------------------------------------------------------------------
/* import A from "./components/A"
import B from "./components/B"
import C from "./components/C"



const App = () => {
  return (
    <div>
      <A></A>
      <B></B>
      <C></C>
    </div>
  )
}

export default App
//-------------------------------------------------------------------------------------------------------------------
import Driver from "./components/Driver";
import drivers from './data/drivers.json';

const App = () => {
  return (
    <div>
      {drivers.map(d => <Driver driver={d} key={d} />)}
    </div>
  );
};
export default App;
*/
//-------------------------------------------------------------------------------------------------------------------
/* import MyComponent from "./components/MyComponent";

const App = () => {

  const changePadre = param => alert(param);

  return <div>
    <MyComponent onSomeEvent={changePadre} />
  </div>;
}

export default App; */
//-------------------------------------------------------------------------------------------------------------------
/* import { useState } from "react"
import Componente1 from "./components/Componente1"
import Componente2 from "./components/Componente2"


const App = () => {
  const [result, setResult] = useState(0)
  return (
    <div>
      <Componente1 calculate={setResult} />
      <Componente2 result={result} />
    </div>
  )
}

export default App */
//-------------------------------------------------------------------------------------------------------------------
/* import { useState } from "react";
import ComponenteEJ2 from "./components/ComponenteEJ2"

const App = () => {
  const [val, setVal] = useState(0)
  return (
    <div>
      <ComponenteEJ2 sendVal={setVal} />
      {val}
    </div>
  )
}

export default App
 */
//-------------------------------------------------------------------------------------------------------------------
/* import { useState } from "react";

const App = () => {
  const [valor, setValor] = useState(0)
  return (
    <div>
      <button onClick={() => setValor(valor + 1)}>Pulsar</button>
      {
        valor % 2 === 0 ? <p>Hola</p> : <p>Adios</p>
      }
    </div>
  );
}
export default App */
//--------------------------------------------------------------------------------------------------------------------
/* import images from "./data/img"
import Image from "./components/Image"

const App = () => {
  return (
    <div>
      {images.map(i => <Image image={i} key={i} />)}
    </div>
  )
}

export default App */
//-------------------------------------------------------------------------------------------------------------------
/* import './app/styles.css'
import images from './data/img'
import Image from './components/Image'



const App = () => {
  return (
    <div>
      <div className="box blue"></div>
      <div className="box green"></div>
      <div className='fotos'>
        {images.slice(2).map(i => <Image image={i} key={i} />)}
      </div>
    </div>
  )
}

export default App */
//-------------------------------------------------------------------------------------------------------------------
/* import { Box } from "./app/styled"


const App = () => {
  return (
    <div className="container">
      <Box color="blue" m={20}>
        <div className="cuadrado"><span>H</span></div>
        <div className="cuadrado" ><span>O</span></div>
        <div className="cuadrado"><span>L</span></div>
        <div className="cuadrado"><span>A</span></div>
      </Box>
    </div>
  )
}

export default App
 */
//-------------------------------------------------------------------------------------------------------------------
/* import { useState } from "react"
import { MyStyledComponent } from "./app/styled"

const App = () => {

  const [isRed, setIsRed] = useState(false)
  return (
    <div>
      <button onClick={() => setIsRed(!isRed)}>Cambiar color</button>
      <MyStyledComponent color={isRed} />
    </div>
  )
}
export default App
 */
//-------------------------------------------------------------------------------------------------------------------

import Popup from "./components/Popup"
import { useState } from "react"


const App = () => {
  const [visible, setVisible] = useState()
  return (
    <div>
      <button onClick={() => setVisible(!visible)}>Mostrar popup</button>
      <Popup visible={visible} setVisible={setVisible} />
    </div>
  )
}

export default App
