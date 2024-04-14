import { Back } from "../../app/styles";

const Popup = ({ visible, setVisible }) => {

    return (
        <Back visible={visible}>
            <div>
                <button onClick={() => setVisible(false)}>X</button>
            </div>
        </Back>
    )
}
export default Popup;
