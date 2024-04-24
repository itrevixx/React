import { useState } from 'react'
import questions from './assets/data/questions'
import { Row, Container, Left, Right } from './app/styles'

const App = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const q = questions[currentQuestion]
    const handleClick = (isRight) => {
        if (isRight)
            if (currentQuestion === questions.length - 1)
                alert('has ganado')
            else
                setCurrentQuestion(currentQuestion + 1)
        else
            setCurrentQuestion(0)
    }
    return (
        <Container>
            <h1>{q.question}</h1>
            <Row>
                <Left>
                    {q.answers.map(a => (
                        <p key={a.txt}>
                            <button onClick={() => handleClick(a.isRight)}>X</button> {a.txt}
                        </p>
                    ))}
                </Left>
                <Right>
                    <img src={q.img} />
                </Right>
            </Row>
        </Container>
    )
}

export default App
