import BottomBar from './components/BottomBar';
import TopBar from './components/TopBar';
import styled from 'styled-components';
import Main from './components/Main';

const AppStyled = styled.div`
  height: 99vh;
  width: 99vw;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <AppStyled>
      <TopBar/>
      <Main/>
      <BottomBar/>
    </AppStyled>  
  );
}

export default App;
