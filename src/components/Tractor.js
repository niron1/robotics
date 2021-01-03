import styled from 'styled-components';
import withHovering from './HoveringHOC';
import tractorImage from '../images/tractor.png';

const TractorStyled = styled.img.attrs({
  src: `${tractorImage}`
})`
  width: 50px;
`;


export default withHovering(TractorStyled);
