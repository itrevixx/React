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
      <Popup visible={displayPopup} />
    </Container >
  )
}

export default App */
//------------------------------------------------------------------------------------------------------------------------
import workouts from "./assets/data/workouts"
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
            w.exercises.map((exer, index) => <Img active={index === currentExercise} onClick={() => setCurrentExercise(index)} src={exer.img} key={exer} />)
          }
        </Right>
      </Row>
    </Container>
  )
}

export default App

