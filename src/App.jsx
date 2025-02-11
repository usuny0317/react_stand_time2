import StateControl from "./components/StateManager";
import {
  AppContainer,
  Content,
  DeepStructure,
} from "./styles/StyledComponents";
import Level1 from "./components/DeepNestedStructure";

// rtk 브랜치
function App() {
  return (
    <AppContainer>
      <h2>[내배캠] 스탠다드반 프로젝트 - RTK 예제</h2>
      <Content>
        <StateControl />
        <DeepStructure>
          <h2>Level1 </h2>
          <Level1 />
        </DeepStructure>
      </Content>
    </AppContainer>
  );
}

export default App;
