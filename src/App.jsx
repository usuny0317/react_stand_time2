import StateControl from "./components/StateManager";
import Level1 from "./components/DeepNestedStructure";
import {
  AppContainer,
  Content,
  DeepStructure,
} from "./styles/StyledComponents";
import { ContextProvider } from "./contexts/MessageContext";

// prop drilling 브랜치 -> context
function App() {
  return (
    <ContextProvider>
      <AppContainer>
        <h2>[내배캠] 스탠다드반 프로젝트 - prop-drilling 에서 context 예제</h2>
        <Content>
          <StateControl />
          <DeepStructure>
            <Level1 />
          </DeepStructure>
        </Content>
      </AppContainer>
    </ContextProvider>
  );
}

export default App;
