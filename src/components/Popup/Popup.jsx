
import { Container, Content, Overlay } from './Popup.styles';

const Popup = ({ propVisible }) => (
  <Container visible={propVisible}>
    <Overlay />
    <Content>Has Ganado🎉</Content>
  </Container>
);


export default Popup;
