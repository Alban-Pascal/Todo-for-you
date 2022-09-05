import styled from "styled-components";
import * as React from "react";

export default function Footer() {
  return (
    <Wrapper>
      <p>footer</p>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: solid 1px;
`;
