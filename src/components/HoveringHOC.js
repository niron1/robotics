import styled from "styled-components";
import { useState } from "react";

let hover = false;

const ToolTip = styled.div`
  width: 70px;
  height: 70px;
  border: 1px solid blue;
  background-color: white;
  padding: 3px;
  word-wrap: break-word;
`;
const DivStyled = styled.div`
  width: 50px;
`;

const withHovering = (WrappedComponent) => props => {
  const [hovering, setHovering] = useState(false);
  const {updatedAt} = props;
  return (
    <DivStyled
      onMouseOver={() => {
        hover = true;
        setTimeout(() => {
          if (hover) {
            setHovering(true);
            setTimeout(() => { setHovering(false)}, 2000);
          }
        }, 500);
      }}
    >
      <WrappedComponent {...props} />
      {hovering && <ToolTip>updatedAt: {updatedAt}</ToolTip>}
    </DivStyled>
  );
};

export default withHovering;
