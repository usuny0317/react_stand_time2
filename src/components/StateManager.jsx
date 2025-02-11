import { useState } from "react";
import PropTypes from "prop-types";
import {
  StateControlWrapper,
  StyledInput,
  StyledButton,
  ButtonGroup,
} from "../styles/StyledComponents";
import { useDispatch } from "react-redux";
import { setMessage } from "../slices/MessageSlice";

function StateControl() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setMessage(inputValue));
    setInputValue("");
  };

  const handleReset = () => {
    dispatch(setMessage(""));
    setInputValue("");
  };

  return (
    <StateControlWrapper>
      <h3>메시지 입력 영역</h3>
      <form onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          placeholder="메시지를 입력하세요"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <ButtonGroup>
          <StyledButton type="submit">전송</StyledButton>
          <StyledButton type="button" onClick={handleReset}>
            초기화
          </StyledButton>
        </ButtonGroup>
      </form>
    </StateControlWrapper>
  );
}

StateControl.propTypes = {
  onMessageChange: PropTypes.func,
};

export default StateControl;
