import styled from 'styled-components';

import droneImage from '../images/drone.png';

const Drone = styled.img.attrs({
  src: `${droneImage}`
})`
  width: 50px;
`;
export default Drone;
