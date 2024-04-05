import { Back } from "../app/styled";


const Popup = ({ visible, setVisible }) => {

    return (
        <Back visible={visible}>
            <div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti placeat itaque provident quia veniam quo quos error. Ullam, pariatur! Aspernatur, amet in maiores accusamus deleniti aut adipisci, velit aperiam illum repellat numquam excepturi minus dignissimos dolorem iste temporibus minima non consequatur natus quidem sapiente vel! Placeat libero esse explicabo earum ducimus dolore. Saepe aliquid, libero fugiat pariatur amet vel architecto impedit quia rem aliquam incidunt expedita praesentium. Ad, architecto rerum?</p>
                <button onClick={() => setVisible(!setVisible)}>Close</button>
            </div>
        </Back>
    )
}
export default Popup;
