import { useParams } from 'react-router-dom';
const Home = () => {
    const { id } = useParams()
    return (
        <div>
            <p>Estas en home</p>
            {id}

        </div >
    );
}

export default Home;