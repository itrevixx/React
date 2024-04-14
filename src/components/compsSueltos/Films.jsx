import { Box } from "../../app/styles";

const Films = ({ film }) => {
    return (
        <Box>
            <div>
                <h3>{film.title} - {film.year}</h3>
                <p>Director: {film.director}</p>
            </div>
        </Box>
    )
}
export default Films;
