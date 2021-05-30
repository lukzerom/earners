import styled from "styled-components";

export const ColumnsWrapper = styled.div`
  display: flex;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const FirstColumn = styled.section`
  width: 50%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 24px;
  @media only screen and (max-width: 800px) {
    width: 100%;
    padding: 24px;
  }
`;

export const SecondColumn = styled.section`
  background-color: #fff3e6;
  width: 50%;
  min-height: calc(100vh - 48px);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const StepWrapper = styled.div`
  min-height: 520px;
`;
