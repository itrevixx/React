
import { Container, Content, Overlay } from './Popup.styles';

const Popup = ({ visible }) => (
  <Container visible={visible}>
    <Overlay />
    <Content>Has Ganado🎉</Content>
  </Container>
);


export default Popup;
