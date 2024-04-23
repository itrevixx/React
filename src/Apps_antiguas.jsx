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
/* import Popup from "./components/Popup"
import { useState } from "react"


const App = () => {
  const [visible, setVisible] = useState(false)
  return (
    <div>
      <button onClick={() => setVisible(true)}>Mostrar popup</button>
      <Popup visible={visible} setVisible={setVisible} />
    </div>
  )
}

export default App */
//-------------------------------------------------------------------------------------------------------------------

/* import Prueba from "./components/Prueba/Prueba"
import { GlobalStyle } from "./components/Prueba/Prueba.styles"



const App = () => {
  return (
    <div>
      <Prueba />
      <GlobalStyle />
    </div >
  )
}

export default App */
//-------------------------------------------------------------------------------------------------------------------
/* import questions from './assets/data/questions'
import Popup from './components/Popup/Popup';
import { Container, Row, Question } from './components/Trivial/Trivial.styles';
import { useState } from 'react';

const App = () => {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [displayPopup, setDisplayPopup] = useState(false);
  const q = questions[currentQuestionIndex];
  return (
    <Container>
      <Question>{q.question}</Question>
      <Row>
        <div>
          {
            q.answers.map(a => <p key={a.txt}><button onClick={() => {
              if (a.isRight)
                if (currentQuestionIndex === questions.length - 1)
                  setDisplayPopup(true);
                else
                  setCurrentQuestionIndex(currentQuestionIndex + 1);
              else
                setCurrentQuestionIndex(currentQuestionIndex === 0 ? 0 : currentQuestionIndex - 1);
            }
            }>X</button> {a.txt}</p>)
          }
        </div>
        <img src={q.img} alt="" />
      </Row>
      <Popup propVisible={displayPopup} />
    </Container >
  )
}

export default App */
//------------------------------------------------------------------------------------------------------------------------
/* import workouts from "./assets/data/workouts"
import { ButtonLeft, ButtonRight, Container, Right, Left, Row, Img, Menu } from "./components/Workouts/Workouts.styles"
import { useState } from "react";

const App = () => {
  const [currentWorkout, setCurrentWorkout] = useState(0);
  const [currentExercise, setCurrentExercise] = useState(0);
  const w = workouts[currentWorkout]

  return (
    <Container>
      <Menu>
        <ButtonLeft onClick={() => setCurrentWorkout(currentWorkout > 0 ? currentWorkout - 1 : currentWorkout)} />
        {
          <p>{w.title}</p>
        }
        <ButtonRight onClick={() => setCurrentWorkout(currentWorkout < workouts.length - 1 ? currentWorkout + 1 : currentWorkout)} />
      </Menu>
      <Row>
        <Left>
          <img src={w.exercises[currentExercise].img} />
        </Left>
        <Right>
          {
            w.exercises.map((exer, index) => (
              <Img
                active={index === currentExercise}
                onClick={() => setCurrentExercise(index)}
                src={exer.img}
                key={exer}
              />)
            )
          }
        </Right>
      </Row>
    </Container>
  )
}

export default App */
//---------------------------------------------------------------------------------------------------------------------------------------

/* import { useState } from "react";
import teatro from './data/teatro.json';
import { P } from "./components/Teatro/Teatro.styles";

const App = () => {
  const [valor, setValor] = useState(0)
  return (
    <div>
      <div>
        <button onClick={() => setValor(valor - 1)}>Atras</button>
        <button onClick={() => setValor(valor + 1)}>Siguiente</button>
      </div>
      {teatro.map((line, index) => <P subrayar={index === valor}>{line}</P>)}
    </div>
  )
}
export default App */
//-----------------------------------------------------------------------------------------------------------------------------
/* import { Col, Modal, Row, Space } from "antd"
const App = () => {
  return (
    <div>
      <Modal open={true}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sed beatae dignissimos vero et nisi delectus mollitia quod unde iste? Nihil quod consectetur consequuntur vitae rem aspernatur quia odit tenetur.
      </Modal>
      <Space direction="vertical">
        <div>aaaaaaaaa</div>
        <div>bbbbbbbbbb</div>
      </Space>
      <Row gutter={[50, 50]}>
        <Col xs={12} lg={6}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, molestias nam vel tempora cumque blanditiis non culpa laudantium ea debitis et! Sapiente odio porro suscipit magni fuga quas saepe, aliquam quam ab iure reprehenderit, corrupti eveniet, aliquid non velit quaerat?
        </Col>
        <Col xs={12} lg={6}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, molestias nam vel tempora cumque blanditiis non culpa laudantium ea debitis et! Sapiente odio porro suscipit magni fuga quas saepe, aliquam quam ab iure reprehenderit, corrupti eveniet, aliquid non velit quaerat?
        </Col>
        <Col xs={12} lg={6}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, molestias nam vel tempora cumque blanditiis non culpa laudantium ea debitis et! Sapiente odio porro suscipit magni fuga quas saepe, aliquam quam ab iure reprehenderit, corrupti eveniet, aliquid non velit quaerat?
        </Col>
        <Col xs={12} lg={6}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, molestias nam vel tempora cumque blanditiis non culpa laudantium ea debitis et! Sapiente odio porro suscipit magni fuga quas saepe, aliquam quam ab iure reprehenderit, corrupti eveniet, aliquid non velit quaerat?
        </Col>
      </Row>
    </div>
  )
}

export default App */
//---------------------------------------------------------------------------------------------------------------------------
/* import { Form, Input } from "antd"

const task = {
  username: "Paco",
  password: "1234"
}


const App = () => {
  return (
    <div>
      <Form
        initialValues={task}
        onValuesChange={(t, t2) => {
          console.log("111111", t, t2)
        }}
      >
        <Form.Item name="username">
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item name="password">
          <Input placeholder="Password" />
        </Form.Item>
      </Form>
    </div>
  )
}

export default App */