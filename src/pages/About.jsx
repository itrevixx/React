import { useParams } from 'react-router-dom';
const About = () => {
    const { id } = useParams()
    return (
        <div>
            <p>Estas en about</p>
            {id}

        </div>
    );
}

export default About;
