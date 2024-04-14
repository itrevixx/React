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
import workouts from "./assets/data/workouts"
import { ButtonLeft, ButtonRight, Container, Images, Left, Row } from "./components/Workouts/Workouts.styles"
import { useState } from "react";

const App = () => {
  const [currentWorkout, setCurrentWorkout] = useState(0);
  const w = workouts[currentWorkout]

  const [currentExercise, setCurrentExercise] = useState(w.exercises[0].img);



  return (
    <Container>
      <div>
        <ButtonLeft onClick={() => setCurrentWorkout(currentWorkout > 0 ? currentWorkout - 1 : 0)} />
        {
          w.title
        }
        <ButtonRight onClick={() => setCurrentWorkout(currentWorkout < workouts.length - 1 ? currentWorkout + 1 : currentWorkout)} />
      </div>
      <Row>
        <Left>
          <img src={currentExercise} />
        </Left>
        <Images>
          {
            w.exercises.map(obj => <img onClick={(e) => { setCurrentExercise(obj.img) }} src={obj.img} key={obj}></img>)
          }
        </Images>
      </Row>
    </Container>
  )
}

export default App

