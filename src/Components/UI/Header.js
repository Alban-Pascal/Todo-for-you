import styled from "styled-components";

export default function Header({ islight, handleToggleTheme }) {
  return (
    <Wrapper>
      <h1>Todo for you</h1>
      <button onClick={handleToggleTheme}>
        Switch to {islight ? "dark" : "light"} theme
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px;
  padding: 0px 24px;
`;
