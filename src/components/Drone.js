import styled from 'styled-components';
import withHovering from './HoveringHOC';
import droneImage from '../images/drone.png';

const DroneStyled = styled.img.attrs({
  src: `${droneImage}`
})`
  width: 50px;
`;


export default withHovering(DroneStyled);
