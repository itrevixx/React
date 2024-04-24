import { useState } from 'react';
import workouts from './assets/data/workouts'
import { ButtonLeft, ButtonRight, Container, Right, Left, Row, Img, Menu } from "./app/styles"


const App = () => {
    const [currentWorkout, setCurrentWorkout] = useState(0);
    const [currentExercise, setCurrentExercise] = useState(0);
    const w = workouts[currentWorkout]

    const handlePrevious = () => {
        setCurrentWorkout(currentWorkout > 0 ? currentWorkout - 1 : currentWorkout)
    }

    const handleNext = () => {
        setCurrentWorkout(currentWorkout < workouts.length - 1 ? currentWorkout + 1 : currentWorkout)
    }
    return (
        <Container>
            <Menu>
                <ButtonLeft onClick={() => handlePrevious()}></ButtonLeft>
                <p>{w.title}</p>
                <ButtonRight onClick={() => handleNext()}></ButtonRight>
            </Menu>
            <Row>
                <Left>
                    <img src={w.exercises[currentExercise].img} />
                </Left>
                <Right>
                    {w.exercises.map((exer, index) => (
                        <Img
                            key={exer}
                            src={exer.img}
                            active={index === currentExercise}
                            onClick={() => setCurrentExercise(index)}
                        />
                    ))}
                </Right>
            </Row>
        </Container>
    )
}

export default App
